/**
 * query_ccep_config.ts
 *
 * Read-only script to query CCEP (Coca-Cola Europacific Partners) company
 * configuration from the Waterplan Back Office API.
 *
 * This script makes ONLY GET requests -- it never mutates any data.
 * It requires a valid Back Office bearer token via environment variable.
 *
 * Usage:
 *   WATERPLAN_BACKOFFICE_TOKEN=<token> npx tsx query_ccep_config.ts
 *
 * Environment variables:
 *   WATERPLAN_BACKOFFICE_TOKEN  (required) - Bearer token for Back Office API auth
 *   WATERPLAN_API_BASE_URL      (optional) - API base URL, defaults to https://api.waterplan.com
 */

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const COMPANY_SLUG = "coca-cola-euro-pacific";

const API_BASE_URL =
  process.env.WATERPLAN_API_BASE_URL?.replace(/\/+$/, "") ||
  "https://api.waterplan.com";

const BACKOFFICE_TOKEN = process.env.WATERPLAN_BACKOFFICE_TOKEN;

if (!BACKOFFICE_TOKEN) {
  console.error(
    "ERROR: WATERPLAN_BACKOFFICE_TOKEN environment variable is required.\n" +
      "Set it to a valid Back Office admin JWT token."
  );
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

interface EndpointResult {
  endpoint: string;
  status: number;
  data: unknown;
  error?: string;
}

/**
 * Makes an authenticated GET request to the API.
 * Returns structured result with status, data, and optional error.
 */
async function fetchEndpoint(path: string): Promise<EndpointResult> {
  const url = `${API_BASE_URL}${path}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${BACKOFFICE_TOKEN}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    let data: unknown;
    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    if (!response.ok) {
      return {
        endpoint: path,
        status: response.status,
        data: null,
        error: `HTTP ${response.status}: ${typeof data === "string" ? data : JSON.stringify(data)}`,
      };
    }

    return { endpoint: path, status: response.status, data };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return {
      endpoint: path,
      status: 0,
      data: null,
      error: `Network error: ${message}`,
    };
  }
}

// ---------------------------------------------------------------------------
// Endpoint definitions (all GET, read-only)
// ---------------------------------------------------------------------------

/**
 * Back Office endpoints for company configuration.
 * Reference: /v1/backoffice/* routes require adminJWTAuthentication.
 */
const BACKOFFICE_ENDPOINTS = {
  // Company details from Back Office
  companyDetails: `/v1/backoffice/companies/${COMPANY_SLUG}`,

  // Company sites (active)
  companySites: `/v1/backoffice/companies/${COMPANY_SLUG}/sites`,

  // Company disabled sites
  companyDisabledSites: `/v1/backoffice/companies/${COMPANY_SLUG}/sites-disabled`,

  // Company users
  companyUsers: `/v1/backoffice/companies/${COMPANY_SLUG}/users`,

  // Company access control (modules + feature flags)
  companyAccessControl: `/v1/backoffice/companies/${COMPANY_SLUG}/accessControl`,

  // Company unlocked modules
  companyUnlockedModules: `/v1/backoffice/companies/${COMPANY_SLUG}/unlockedModules`,

  // All feature flag definitions (global, not company-specific)
  featureFlagDefinitions: `/v1/backoffice/access-control/feature-flags`,

  // All access control groups (to find CCEP's group)
  accessControlGroups: `/v1/backoffice/access-control`,
};

/**
 * V3 API endpoints for additional company data.
 * These use standard JWT auth (the backoffice token should also work
 * if it carries admin privileges).
 */
const V3_ENDPOINTS = {
  // Company details from main API
  companyDetailsV3: `/v3/companies/${COMPANY_SLUG}`,

  // Company sites from main API
  companySitesV3: `/v3/companies/${COMPANY_SLUG}/sites`,

  // Company users from main API
  companyUsersV3: `/v3/companies/${COMPANY_SLUG}/users`,

  // Company roles
  companyRoles: `/v3/companies/${COMPANY_SLUG}/roles`,

  // Company staff
  companyStaff: `/v3/companies/${COMPANY_SLUG}/staff`,
};

// ---------------------------------------------------------------------------
// Main execution
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  console.error(`[query_ccep_config] Starting CCEP configuration query...`);
  console.error(`[query_ccep_config] API Base URL: ${API_BASE_URL}`);
  console.error(`[query_ccep_config] Company slug: ${COMPANY_SLUG}`);
  console.error(`[query_ccep_config] Token present: ${BACKOFFICE_TOKEN ? "yes" : "no"}`);
  console.error("");

  const results: Record<string, EndpointResult> = {};

  // --- Back Office endpoints (primary source for config) ---
  console.error("[query_ccep_config] Querying Back Office endpoints...");

  for (const [key, path] of Object.entries(BACKOFFICE_ENDPOINTS)) {
    console.error(`  -> GET ${path}`);
    results[key] = await fetchEndpoint(path);
    if (results[key].error) {
      console.error(`     ERROR: ${results[key].error}`);
    } else {
      console.error(`     OK (${results[key].status})`);
    }
  }

  // --- V3 API endpoints (supplementary data) ---
  console.error("\n[query_ccep_config] Querying V3 API endpoints...");

  for (const [key, path] of Object.entries(V3_ENDPOINTS)) {
    console.error(`  -> GET ${path}`);
    results[key] = await fetchEndpoint(path);
    if (results[key].error) {
      console.error(`     ERROR: ${results[key].error}`);
    } else {
      console.error(`     OK (${results[key].status})`);
    }
  }

  // --- Assemble output ---
  const output = {
    _metadata: {
      script: "query_ccep_config.ts",
      companySlug: COMPANY_SLUG,
      apiBaseUrl: API_BASE_URL,
      queriedAt: new Date().toISOString(),
      endpointCount: Object.keys(results).length,
      successCount: Object.values(results).filter((r) => !r.error).length,
      errorCount: Object.values(results).filter((r) => r.error).length,
    },
    backoffice: {
      companyDetails: results.companyDetails?.data ?? null,
      companySites: results.companySites?.data ?? null,
      companyDisabledSites: results.companyDisabledSites?.data ?? null,
      companyUsers: results.companyUsers?.data ?? null,
      companyAccessControl: results.companyAccessControl?.data ?? null,
      companyUnlockedModules: results.companyUnlockedModules?.data ?? null,
      featureFlagDefinitions: results.featureFlagDefinitions?.data ?? null,
      accessControlGroups: results.accessControlGroups?.data ?? null,
    },
    v3Api: {
      companyDetails: results.companyDetailsV3?.data ?? null,
      companySites: results.companySitesV3?.data ?? null,
      companyUsers: results.companyUsersV3?.data ?? null,
      companyRoles: results.companyRoles?.data ?? null,
      companyStaff: results.companyStaff?.data ?? null,
    },
    errors: Object.entries(results)
      .filter(([, r]) => r.error)
      .map(([key, r]) => ({
        endpoint: key,
        path: r.endpoint,
        status: r.status,
        error: r.error,
      })),
  };

  // Print JSON to stdout (machine-readable output)
  console.log(JSON.stringify(output, null, 2));

  // Summary to stderr
  console.error("\n[query_ccep_config] --- Summary ---");
  console.error(
    `  Total endpoints queried: ${output._metadata.endpointCount}`
  );
  console.error(`  Successful: ${output._metadata.successCount}`);
  console.error(`  Failed: ${output._metadata.errorCount}`);

  if (output.errors.length > 0) {
    console.error("\n  Failed endpoints:");
    for (const err of output.errors) {
      console.error(`    - ${err.endpoint} (${err.path}): ${err.error}`);
    }
  }

  console.error("\n[query_ccep_config] Done.");
}

main().catch((err) => {
  console.error("[query_ccep_config] Fatal error:", err);
  process.exit(2);
});
