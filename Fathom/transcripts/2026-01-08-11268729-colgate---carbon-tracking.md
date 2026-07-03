# Colgate - Carbon Tracking
**Date:** 2026-01-08T12:44:20Z
**URL:** https://fathom.video/calls/525226818
**Participants:** Tomas Gomez (tomas.gomez@waterplan.com), Tomas Groshaus (tomas.groshaus@waterplan.com), Felipe Gutiérrez (felipe.gutierrez@waterplan.com), Ivo Kalaizic (ivo.kalaizic@waterplan.com)

---

**Tomás Gómez** [00:00:00]: Asuntito, así que ahora estamos nada más trabajando con lo de Greenwood, que nos pasaron en 5 archivos distintos de 2020 a 2024, y obviamente toda la data de carbón, seguramente ya estás al tanto, pero te lo menciono, es que cada, por ejemplo, el Purchase Electricity Minus Rex, que es lo que usan ellos para hacer el cálculo de Scope 2, tiene para cada año, para un mismo sitio, un factor de conversión distinto que hace que ese factor hace que se pase a TCO2, y eso es lo que después se visualiza en plataforma.

**Tomás Gómez** [00:00:35]: Hoy el issue que tenemos, que vamos a charlar ahora seguro, está ahí nada más, con esta data de este site.

**Tomás Gómez** [00:00:42]: ¿Qué limitaciones tenemos hoy en la plataforma?

**Tomás Gómez** [00:00:45]: Podemos meter un factor de conversión para un sitio, eso está bueno, solo para un sitio, entonces cada sitio puede tener uno distinto, dependiendo de cómo está y en qué país se ubica, pero no para cada año distinto, entonces ahí ya nos caga, y vamos a tener que hacer un average y los valores que vamos a mostrar.

**Tomás Gómez** [00:00:59]: Van a ser un poquito distintos.

**Tomás Gómez** [00:01:02]: Y después para lo que es Scope 1, se está calculando bien, ¿viste, pibes?

**Tomás Gómez** [00:01:05]: Están iguales.

**Tomás Gómez** [00:01:08]: Sí, perfecto.

**Tomás Gómez** [00:01:09]: La conversión está igual, así que eso está perfecto.

**Tomás Gómez** [00:01:12]: Y nada, estamos como, yo no sé en qué, cómo llamarlo, estamos como vendiéndose la Greenwood y este Rupert, que es como el flaco que está más manija con todo lo que es carbon tracking, ¿no?

**Tomás Gómez** [00:01:25]: Sería eso, básicamente, estamos tratando de ir.

**Felipe Gutierrez Mosquera** [00:01:29]: Sí, lo que pasa es que, viste, probarlo ellos, y para que lo prueben lo tienen bien configurado, entonces dijimos, bueno, configuramos este site de Greenwood, entonces esperamos que nos pasen toda la otra data, si ya lo pueden ir usando y probando.

**Felipe Gutierrez Mosquera** [00:01:43]: Sí.

**Felipe Gutierrez Mosquera** [00:01:44]: Y, idealmente, ya, como el próximo paso es hacer el kick-off a modo piloto con un site, con uno o dos sites, para que lo prueben ellos, la gente de los sites.

**Felipe Gutierrez Mosquera** [00:01:56]: Bueno.

**Tomás Gómez** [00:01:57]: Bueno.

**Tomás Gómez** [00:01:59]: Bueno.

**Tomás Groshaus** [00:01:59]: Bueno.

**Tomás Groshaus** [00:02:00]: ¿Qué onda?

**Tomás Groshaus** [00:02:02]: Todo bien.

**Tomás Gómez** [00:02:04]: ¿Estás con buen Wi-Fi, Tony, o preferís que aparemos la cámara?

**Tomás Groshaus** [00:02:07]: No, por ahora bien.

**Tomás Gómez** [00:02:09]: De una, escucho bien a menos.

**Ivo Kalaizic** [00:02:13]: Bueno, vos con esto.

**Tomás Gómez** [00:02:16]: Bien.

**Tomás Gómez** [00:02:22]: ¿Quieren que los ponga en contexto de lo que pasó ayer?

**Tomás Gómez** [00:02:25]: quieren que...?

**Tomás Gómez** [00:02:26]: Ahí, Tommy, acá le acabamos de comentar un poco ahí, boludo.

**Tomás Gómez** [00:02:30]: Todo lo que estamos haciendo con Greenwood particularmente y que estamos esperando la data de Colgate para poder hacer esto a nivel company y no solo a un solo sitio.

**Tomás Gómez** [00:02:40]: Hasta ahí estamos.

**Tomás Groshaus** [00:02:42]: No, vayamos con texto, vayamos a resolver después.

**Tomás Groshaus** [00:02:46]: Dale.

**Tomás Gómez** [00:02:47]: Hay un solo issue hoy, que les voy a mostrar cuáles.

**Tomás Gómez** [00:02:50]: ¿Está bien?

**Tomás Gómez** [00:02:51]: Purchase electricity, ¿no?

**Tomás Gómez** [00:02:54]: Exactamente.

**Tomás Gómez** [00:02:54]: La variable purchase electricity-rex no tiene un factor de conversión.

**Tomás Gómez** [00:02:59]: hermano...

**Tomás Gómez** [00:02:59]: Gracias.

**Tomás Gómez** [00:03:00]: plataforma para pasar de kilowatts a TCO2.

**Tomás Gómez** [00:03:04]: Eso es el resumen del error.

**Tomás Gómez** [00:03:06]: Ahora, hoy no podemos meter un factor de conversión por sitio y por año, entonces vamos a tener que agarrar un average para ese sitio, Greenwood.

**Tomás Groshaus** [00:03:20]: No, para mí, sorry, Tomy, te interrumpo, para mí, o sea, el conversion rate de Purchase Electricity without RECS, es el mismo que el de Purchase Electricity.

**Tomás Gómez** [00:03:33]: Yo creo que...

**Tomás Groshaus** [00:03:37]: Debería hacerlo.

**Tomás Groshaus** [00:03:38]: No, debería hacerlo porque es la misma métrica, solo que debería, le estás descontando, como que tenés, viste, la métrica Purchase Electricity, que es en kilowatts, y le descontás los kilowatts que le compras...

**Tomás Groshaus** [00:03:54]: Bueno, puede haber solo un mini caveat, puede haber solo un mini caveat, pero en teoría...

**Tomás Groshaus** [00:04:00]: Es tipo, che, tengo Purchase Electricity, y le descuento como unos títulos que lo que estoy diciendo es que le pagué a otra empresa que estaba como capturando dióxido de carbono, para tener Purchase Electricity minus REC.

**Tomás Groshaus** [00:04:19]: Bien.

**Tomás Groshaus** [00:04:20]: Entonces, el Purchase Electricity minus REC que te debería quedar, el final, si crees, es la misma variable, por así decirlo.

**Tomás Groshaus** [00:04:29]: Entonces, la conversión debería ser lo mismo, las emisiones deberían ser menores porque tengo menos de la variable inicial, ¿no?

**Tomás Groshaus** [00:04:37]: Ok.

**Tomás Groshaus** [00:04:41]: Creo que es así, no estoy 100% seguro.

**Tomás Gómez** [00:04:45]: Bien, voy a eso.

**Felipe Gutierrez Mosquera** [00:04:47]: Yo haciendo así, pero no, o el factor sigue siendo distinto según el año.

**Felipe Gutierrez Mosquera** [00:04:53]: ese problema.

**Tomás Groshaus** [00:04:55]: Pero para...

**Tomás Groshaus** [00:04:56]: Bueno, sí.

**Tomás Groshaus** [00:04:57]: A ver, ¿podés mostrar eso, Tomi?

**Tomás Groshaus** [00:04:58]: Yo creo que tengo ahí.

**Tomás Gómez** [00:05:00]: Porque a ver, yo ayer que pensé, dije, no lo jodo a los chicos, lo hacemos rápido, meto la electricidad como purchase electricity, que ya tiene un factor de conversión, lo de minus rates o no, no hace falta ir a ese detalle por ahí, tipo en la reunión de hoy, entonces lo meto directamente como purchase electricity, que ya tiene un factor de conversión.

**Tomás Gómez** [00:05:18]: Ese factor de conversión para Greenwood, de purchase electricity, es un poco más bajo del que están usando año a año la gente de Greenwood, ¿bien?

**Tomás Gómez** [00:05:27]: Y acá les paso a compartir pantalla, así se lo pueden ver, avísenme cuando lo estén viendo.

**Tomás Gómez** [00:05:35]: Tiki, ocultar.

**Tomás Gómez** [00:05:37]: Ahí está, ¿se ve?

**Ivo Kalaizic** [00:05:41]: Estamos viendo el MIT.

**Ivo Kalaizic** [00:05:43]: Bien, perfecto.

**Tomás Gómez** [00:05:45]: Esto que tenemos acá es el factor de conversión de purchase electricity conventional de Greenwood para todos los años, que es un 0.000285919.

**Tomás Gómez** [00:06:00]: ¿Bien?

**Tomás Gómez** [00:06:01]: Ahora, yo yendo a los archivos que tenemos acá, en cada uno de estos, el de 2020, 21, bla, bla, el factor de conversión que veo que están usando es muy similar, ¿sí?

**Tomás Gómez** [00:06:12]: Pero acá tenés un 0.00333, o 339, 0.0030, 0.0028, 0.0029, 0.0028.

**Tomás Gómez** [00:06:23]: Entonces, es distinto, yo lo que quería hacer para salir jugando, viste, Tomi, que ayer en Target Tracking pregunté, che, me pasan este Excel para ver qué tenemos, y de última lo metí así, modificaba la fórmula para hoy, por lo menos, y que se vea cómo se tiene, muy similar a cómo se debería ver, que todavía lo podemos hacer.

**Tomás Gómez** [00:06:44]: O sea, si hoy me dicen, el equipo de Target Tracking, básicamente, EMA o MICA, no llegan a meter un factor de conversión a TCO2 para lo que sería Purchase Electricity Minus RECS.

**Tomás Gómez** [00:07:00]: Yo agarro la data, vuelo lo que hoy cargué, lo cargo con esta variable.

**Tomás Groshaus** [00:07:04]: No, estos sí llegan.

**Tomás Groshaus** [00:07:06]: Yo estoy pensando si es lo mejor.

**Tomás Groshaus** [00:07:08]: Eso es lo que me hace Dor.

**Tomás Gómez** [00:07:10]: Yo lo que pienso que podría ser mucho más accurate para no tener un 0.0028 es agarrar un average de todos estos que te va a quedar en 0.0029 algo, 30, y lo metemos.

**Tomás Gómez** [00:07:23]: Y le decimos, che, usamos un average de los 5 años que nos pasaron.

**Tomás Groshaus** [00:07:28]: A mí me preocupa más cómo va a afectar en target tracking que el número que usamos en conversión.

**Tomás Groshaus** [00:07:41]: O sea, lo que quiero ir es, ¿podemos ver para Greenwood cómo es la data?

**Tomás Groshaus** [00:07:49]: ¿Lo que cargué?

**Tomás Groshaus** [00:07:53]: Sí, o sea, ¿qué variables tiene?

**Tomás Groshaus** [00:07:56]: Sí, podemos.

**Tomás Gómez** [00:07:57]: Bien, acá tenemos el scope.

**Tomás Gómez** [00:08:00]: Uno, nada más compartieron Combined Natural Gas, esto pasa en todos los archivos, ¿está bien?

**Tomás Gómez** [00:08:05]: Entonces lo único que estoy usando es Combined Natural Gas.

**Tomás Gómez** [00:08:08]: Entonces, pasándolo al formato Target Tracking, es nada más Natural Gas para cada mes de cada año, en metros cúbicos, tal cual está.

**Tomás Gómez** [00:08:19]: Después no se necesita más nada.

**Tomás Gómez** [00:08:21]: Para Sculptos nos compartieron esto, yo ayer me equivoqué y cargué Purchase Electricity Conventional, que no era la que tenía que entrar, la que tenía que entrar era Purchase Electricity Minus Rex, for Scope 2, bla, bla, bla, que era esto, ¿bien?

**Tomás Gómez** [00:08:35]: Fíjense que esto está en, yo le digo Million Watts, manso burro, en Megawatts, lo pasé a Kilowatts, yo lo cargué en Kilowatts en plataforma.

**Tomás Groshaus** [00:08:45]: No tienen, o sea, no, tiene, o sea, solo para Scope 2 solo cargan Purchase Electricity Minus Rex, no tienen una que sea Purchase Electricity Conventional.

**Tomás Groshaus** [00:08:55]: Tienen un Purchase Electricity Conventional, sí, que no lo cargamos nosotros.

**Tomás Gómez** [00:09:00]: Porque a Pipe le marcaron en verde cuál era la única que deberían usar para Scope 2, y si vos ves el cálculo, están considerando esto.

**Tomás Gómez** [00:09:07]: Nada más esto.

**Tomás Gómez** [00:09:09]: Y el factor es este 0.00333 que es que compartí.

**Tomás Gómez** [00:09:13]: En cada archivo fui a ver eso.

**Tomás Gómez** [00:09:16]: Entonces a Pipe le dijeron, che, usa esto.

**Tomás Gómez** [00:09:18]: Creo que nosotros en una reunión también nos dijimos.

**Tomás Groshaus** [00:09:21]: Sí, imagínate que yo soy un, esto es más para Pipe, ¿no?

**Tomás Groshaus** [00:09:26]: Si yo soy un site, porque me acuerdo de haber charlado de esto, pero no me acuerdo, no me acuerdo, digamos, pero si yo soy un site, y tengo un proyecto que básicamente es comprar RECs.

**Tomás Groshaus** [00:09:43]: O sea, básicamente es un proyecto para reducir purchase electricity minus RECs.

**Tomás Groshaus** [00:09:53]: Yo cuando entre y cree el proyecto, voy a tener que decir que impacta en la métrica Purchase electricity.

**Tomás Groshaus** [00:10:00]: D-rex, el impact metric del proyecto.

**Tomás Groshaus** [00:10:06]: ¿Está ahí ok?

**Tomás Groshaus** [00:10:09]: Yo creo que nos habían dicho que eso podía confundir, que querían que si el proyecto sea de rex, por ejemplo, que la variable se llame, el impact metric se llame rex, ¿me sabéis?

**Tomás Groshaus** [00:10:22]: Y que automáticamente sepa que tiene que impactar en purchase electricity-rex.

**Tomás Gómez** [00:10:30]: ¿Vos te acordás de algo, Pipe, o tal vez ni estás?

**Felipe Gutierrez Mosquera** [00:10:33]: No, de eso específicamente no me acuerdo que lo llevamos hablando, al menos cuando estaba yo.

**Tomás Groshaus** [00:10:39]: ¿Crees que estamos bien, Pipe, entonces si dejamos purchase electricity-rex como variable?

**Tomás Groshaus** [00:10:44]: O sea, no va a haber purchase electricity, hay que sacarla, Tomi y Gómez, o sea, que...

**Tomás Groshaus** [00:10:48]: Ya no está convencional.

**Tomás Gómez** [00:10:51]: Pero en Colgate creo que sí, anda o a waterplanar.

**Tomás Gómez** [00:10:54]: O sea, en la fórmula está, está bien, a company level, en Greenwood...

**Tomás Gómez** [00:11:00]: Que no tiene data no se va a ver eso, y si hoy vamos a mostrar Gringwood no hace falta, pero sí, pará, voy, y lo vemos acá.

**Tomás Groshaus** [00:11:08]: Me pasa que, tenés razón con eso, pero cuando vos vas a crear un proyecto, aunque estés en Gringwood el proyecto, va a aparecer el Purchase Electricity.

**Tomás Groshaus** [00:11:20]: Esta es la fórmula de Scope 2 hoy.

**Tomás Gómez** [00:11:24]: Purchase Electricity, bueno, Purchase Team es otra que usan, que nos lo pasaron acá en el archivo, pero estaba siempre vacío, entonces, no se usó, tipo, ni lo metí porque no tenía sentido.

**Tomás Gómez** [00:11:33]: Acá lo que nosotros deberíamos hacer, si vamos a usar la variable Purchase Electricity Conventional, perdón, Purchase Electricity Minus Rex, es meter Purchase Electricity Minus Rex con la estrellita y transformado a TCO2, que es lo que nos está faltando.

**Tomás Gómez** [00:11:51]: Pará, pero ahí habría que sacar entonces Purchase Electricity Conventional.

**Tomás Gómez** [00:11:55]: No, porque debería estar vacía y si está cargada es un valor distinto.

**Tomás Gómez** [00:11:59]: Gracias.

**Tomás Gómez** [00:12:00]: Pero no, no, no, pero ahí está, no, o sea, sí, sí, colgate, o sea, en verdad lo que deberíamos hacer, sí, la respuesta es sí, para en un futuro cuando queramos tener toda la data de todos los sitios, Purchase Electricity Conventional debería volar y queda la que es minus regs.

**Tomás Gómez** [00:12:18]: Ahora, lo que seguramente pase es que nos pasen toda la data de todos los sitios y yo llegué a este Purchase Electricity minus regs con alguna fórmula.

**Tomás Gómez** [00:12:26]: Entonces voy a meter esto, ro, y voy a restarle por ahí este 89.algo o lo que sea para llegar, no importa eso, yo después lo veo, pero sí se entiende, ¿no?

**Tomás Groshaus** [00:12:39]: Sí, pero por ahora lo eliminaría de las fórmulas, no sé si dejaría, pero es de minus regs, o es algún warning.

**Tomás Gómez** [00:12:49]: Ok, ahora mi pregunta es, si nosotros hacemos eso, va a impactar a company level, ¿no nos importa ahora?

**Tomás Gómez** [00:12:58]: Pero no tenemos datos.

**Tomás Gómez** [00:13:00]: Hay datadami creo, porque cuando voy a calcular scope 1, 2, se calcula.

**Tomás Gómez** [00:13:06]: Fíjate, acá tenés scope 1, y acá tenés...

**Tomás Gómez** [00:13:12]: ¿Podés ir al playground y guardar de dónde hay data de purchase electricity?

**Tomás Groshaus** [00:13:17]: Sí.

**Tomás Groshaus** [00:13:18]: ¿Qué sites?

**Tomás Gómez** [00:13:20]: Acá tenés scope 1.

**Tomás Gómez** [00:13:22]: ¿Puede ser que venga de los sites demo?

**Felipe Gutierrez Mosquera** [00:13:25]: Seguramente sea de los sites demo que armamos en su momento con Tisco.

**Tomás Gómez** [00:13:29]: Data Guiding, Playground, acá tengo varias variables, voy a buscar...

**Tomás Gómez** [00:13:36]: Igual eso a nivel company, o sea...

**Felipe Gutierrez Mosquera** [00:13:40]: ¿Puede ser de central en Greenwood?

**Tomás Gómez** [00:13:42]: Regional, Tiki, y...

**Tomás Groshaus** [00:13:45]: Sí, van todos en Greenwood, pero viste...

**Tomás Groshaus** [00:13:47]: ¿Veis a central advance?

**Tomás Groshaus** [00:13:48]: Mirá, sí, todo lo...

**Tomás Groshaus** [00:13:50]: Todo demo, demo, demo, demo, Yo lo que haría, Tomi y Gómez, es todos estos valores que están en las demos.

**Tomás Groshaus** [00:13:59]: O sea, paso 1.

**Tomás Groshaus** [00:14:01]: Paso 1 es cambiaría las variables, podemos ir escribiéndolos así, ¿qué más vale?

**Tomás Groshaus** [00:14:09]: Así, dame un toque.

**Tomás Groshaus** [00:14:12]: Lo escribimos y...

**Tomás Gómez** [00:14:15]: Paso 1, bueno, no importa, yo arranco la lista, dale, vamos.

**Tomás Groshaus** [00:14:22]: Paso 1, cambiar, encolgate la variable Purchase Electricity Conventional por Purchase Electricity Minus REC.

**Tomás Groshaus** [00:14:33]: Eso es en fórmula.

**Tomás Groshaus** [00:14:35]: En fórmula, sí.

**Tomás Gómez** [00:14:39]: Conventional por Purchase Electricity Minus REC en la fórmula de SCOPE 2.

**Tomás Gómez** [00:14:48]: Y es como 1 más 2, para que quede clarísimo.

**Tomás Groshaus** [00:14:52]: Y en...

**Tomás Groshaus** [00:14:56]: Ah, para.

**Tomás Groshaus** [00:14:58]: Ah, no.

**Tomás Gómez** [00:15:00]: Porque si no sería, si cambio el nombre de la variable va a ser medio caótico.

**Tomás Groshaus** [00:15:07]: Un segundo, ahora estoy pensando.

**Tomás Groshaus** [00:15:09]: Sí.

**Tomás Groshaus** [00:15:11]: Sí, lo mejor.

**Tomás Gómez** [00:15:15]: Y acá voy a cuidar mi TOC.

**Tomás Groshaus** [00:15:21]: Muy lejos.

**Tomás Groshaus** [00:15:23]: Bien, favorito de...

**Tomás Groshaus** [00:15:31]: No podemos volar Purchase Electricity porque, Pipe, Purchase Electricity sí afecta a Energy Intensity, por ejemplo.

**Tomás Groshaus** [00:15:39]: Ahí hay que usar Purchase Electricity, no hay que usar Purchase Electricity mayor recto para el Energy Intensity.

**Tomás Groshaus** [00:15:45]: Sí.

**Tomás Groshaus** [00:15:46]: ¿Se entiende, Pipe?

**Felipe Gutierrez Mosquera** [00:15:47]: Vos decís que no podemos volar, o no cargar esa variable.

**Felipe Gutierrez Mosquera** [00:15:52]: La tenemos que cargar siempre.

**Felipe Gutierrez Mosquera** [00:15:53]: Claro.

**Felipe Gutierrez Mosquera** [00:15:53]: Sí, sí, sí.

**Tomás Groshaus** [00:15:54]: Creo que para esa variable, para el tema de que para la intensidad de energía sí se usa la energía.

**Tomás Gómez** [00:16:00]: Repetime eso, Gumi, acá está bien, por lo que veo en fórmula, voy a company catalog rápido, Energy Intensity está considerando Natural Pass, Heating Oil, Purchase Electricity Conventional, que yo no la metí, la tengo que meter para que quede bien en el, listo, paso uno, agregar Purchase Electricity Conventional.

**Tomás Groshaus** [00:16:30]: En, en fórmula de Energy Intensity, ah, ¿ya estaba dicho eso?

**Tomás Groshaus** [00:16:34]: No, ya estaba, en Target Tracking, en Data Valley.

**Tomás Gómez** [00:16:37]: Ok.

**Tomás Gómez** [00:16:37]: Ayer la metí y la borré porque pensé que estaba mal, soy un verde, pero ya lo tengo acá en este formato y lo tengo así, así que no puedo hacer nada.

**Tomás Gómez** [00:16:46]: Bien, seguimos.

**Tomás Gómez** [00:16:47]: Perfecto.

**Tomás Groshaus** [00:16:48]: Entonces, cambié en Colgate, la variable de Purchase Electricity Conventional, en la fórmula de Scope 2 y Scope 1 en 2, sí.

**Tomás Groshaus** [00:16:55]: La de Scope 1 y 2 creo que agarra Scope 2, así que eso va a estar bien.

**Tomás Groshaus** [00:16:59]: Tercero.

**Tomás Groshaus** [00:16:59]: ¡Gracias!

**Tomás Groshaus** [00:16:59]: ¡Gracias!

**Tomás Groshaus** [00:17:00]: ¿Vos podés tocar los conversion factors?

**Tomás Groshaus** [00:17:02]: No, no, lo tiene Serema por ahora.

**Tomás Groshaus** [00:17:04]: ¿Lo tiene que Serema o Mika?

**Tomás Groshaus** [00:17:06]: Yo lo que haría es pedirle a Ema o Mika que le pongan el mismo conversion factor de Purchase Electricity a Purchase Electricity-REC, y hoy Pipe lo anotamos para preguntar en la reunión con Rupert.

**Tomás Groshaus** [00:17:26]: Porque Rupert me contestó el mail diciendo que nos iban a pasar los conversion rates, los conversion factors.

**Tomás Groshaus** [00:17:34]: Entonces le digo, mirá, te pusimos el que tenemos la referencia de Purchase Electricity, avísanos cómo lo ves.

**Tomás Gómez** [00:17:41]: Si tenemos este 0028, ¿no preferís que les pase una?

**Tomás Gómez** [00:17:45]: Yo pondría el mismo.

**Felipe Gutierrez Mosquera** [00:17:48]: No cambia, la Está, pues la verdad que viste, eso depende de dónde está el site.

**Felipe Gutierrez Mosquera** [00:17:55]: Sí.

**Felipe Gutierrez Mosquera** [00:17:56]: Cuando nos lo pasaron, la data que nos pasaron.

**Felipe Gutierrez Mosquera** [00:18:00]: Pero falta.

**Felipe Gutierrez Mosquera** [00:18:01]: Por ejemplo, acá te muestro, ¿viste?

**Felipe Gutierrez Mosquera** [00:18:06]: En 2020, por ejemplo, acá tenemos para Greenwood, los conversion factors de 2018, pero no está el de 2020, ¿se entiende?

**Tomás Gómez** [00:18:19]: Hay que tener cuidado con esos cálculos, está bien, porque esto se lo menciono cuando no llegue, cuando no llegue la data de todos los sitios va a ser un toque, porque se hace una vez.

**Tomás Gómez** [00:18:32]: Ayer, Pipe, por ejemplo, esto que pasaste, ¿te acordás, viste, que era tipo, yo te puse en una postdata, te puse, ojo, que están en megawatts, entonces esas cositas va a haber que tener cuidado.

**Tomás Groshaus** [00:18:45]: Igual, todo lo conversion factor del pasado no nos interesa, porque vamos a tener la data, entonces no vamos a hacer ninguna conversión en el pasado nosotros, vamos usar las emisiones que nos mandan, por así decirlo, ¿no?

**Tomás Groshaus** [00:18:58]: Sí, pero en verdad vamos a...

**Tomás Gómez** [00:19:00]: Necesitar meterlo en plataforma para que se traslade bien a Target Tracking y yo te mostraba lo de Spock 1 que justo de pedo coincidió todo exacto hasta con coma con lo que tienen ellos, eso no va a pasar para todos los sitios.

**Tomás Gómez** [00:19:13]: Va a ser algo que vamos a tener que ir a revisar.

**Tomás Gómez** [00:19:15]: Vamos a tener que agarrar cada conversion factor de cada sitio, de cada año que tengamos data, ellos no les pasen obviamente, y con eso nos vamos, o sea, va a ser tipo, che, bueno, tenemos esto por un lado, esto por el otro, y ahí se va a ver bien todo en Target Tracking.

**Tomás Gómez** [00:19:30]: Ayer de pedo coincidió todo Scope 1 para este sitio en particular, con la data que nos pasaron, y lo que era 749 daba 749 en decimales, y buenísimo.

**Tomás Gómez** [00:19:39]: Pero si no, no.

**Tomás Groshaus** [00:19:42]: No, ahí para Ivo, anotemos Ivo para llevárnoslo con producto.

**Tomás Groshaus** [00:19:50]: No, no hace falta que ahora entiendas algo, pero anotatela si lo charlamos nosotros sobre, básicamente...

**Tomás Groshaus** [00:19:58]: Básicamente...

**Tomás Groshaus** [00:20:01]: Para data histórica, ¿cómo se calcula las emisiones hoy?

**Tomás Groshaus** [00:20:11]: Porque quizás podemos pasarle el valor absoluto de emisiones sin hacer el cálculo.

**Tomás Gómez** [00:20:20]: ¿Te acordás, Pipe, que en algún lugar nosotros habíamos pasado lo de que ellos querían por sitio y por año?

**Tomás Gómez** [00:20:30]: Sí, creo que está ahí en el thread.

**Felipe Gutierrez Mosquera** [00:20:32]: O sea, ahí lo que cambia es si es Scope 1 o Scope 2.

**Felipe Gutierrez Mosquera** [00:20:35]: Scope 1 es más fácil porque ya están hits, todos los conversion factors, de todo, para todos los sites, son los mismos.

**Felipe Gutierrez Mosquera** [00:20:42]: También Scope 2 cambia según el año y según dónde está ubicado, es grácticamente el site.

**Felipe Gutierrez Mosquera** [00:20:47]: Sí.

**Felipe Gutierrez Mosquera** [00:20:49]: Es el tema.

**Tomás Gómez** [00:20:50]: Hablar de, bueno, ni lo voy a nombrar para no volvernos yo.

**Tomás Gómez** [00:20:54]: Bien, Tomi, ¿algún paso más acá que quieras que hagamos?

**Tomás Gómez** [00:20:57]: Yo me llevo a hacer todo esto.

**Tomás Gómez** [00:20:58]: Yo le pido a Emma...

**Tomás Gómez** [00:21:00]: Y a Minka que usemos el mismo, los valores que vamos a estar viendo en plataforma van a ser un poco distintos a lo que vemos en el Excel, cuando digo lo que vemos en el Excel, va a ser este Excel de ellos, donde tienen marcado en metric tones cuánto TCO se emitió, entonces este 1324, si yo uso este valor, por ejemplo, te hago ya.

**Tomás Groshaus** [00:21:23]: Es que va a ser diferente aunque usés el promedio, ¿no?

**Tomás Groshaus** [00:21:26]: ¿Estás de acuerdo?

**Tomás Groshaus** [00:21:27]: Va a ser diferente aunque usés el promedio.

**Tomás Gómez** [00:21:29]: Y acá si lo multiplico, la diferencia es 1097 contra 1304.

**Tomás Gómez** [00:21:38]: Y ahora si yo usas un promedio, ponele 0.0030.

**Tomás Gómez** [00:21:47]: Qué verde.

**Tomás Gómez** [00:21:48]: Sí, lo otro es, no podemos cargar directamente esta variable, ¿no?

**Felipe Gutierrez Mosquera** [00:21:52]: Se va a acercar mucho.

**Felipe Gutierrez Mosquera** [00:21:57]: No podemos cargar directamente el lugar.

**Felipe Gutierrez Mosquera** [00:22:00]: Valor de scope 2 metric tons calculated, en vez de para mí tener que ser los impactos.

**Tomás Gómez** [00:22:05]: Lo puedo cargar y sería una guachada, pero sí.

**Tomás Gómez** [00:22:10]: No, se puede porque ningún proyecto va impactar.

**Felipe Gutierrez Mosquera** [00:22:15]: Ah, verdad.

**Tomás Groshaus** [00:22:18]: ¿Entonces, Felipe?

**Tomás Groshaus** [00:22:19]: O los proyectos impactan sobre las raw metrics.

**Tomás Groshaus** [00:22:21]: Sí.

**Tomás Groshaus** [00:22:23]: Como que el proyecto...

**Tomás Groshaus** [00:22:25]: Es el pasado, esta metric.

**Felipe Gutierrez Mosquera** [00:22:29]: No, pero vos lo que decís es poner el pasado como número absoluto.

**Felipe Gutierrez Mosquera** [00:22:35]: No se puede porque...

**Tomás Gómez** [00:22:36]: No, Felipe, porque además después tendrías que ir al proyecto, hacer que impacte en esta métrica custom, que va a ser algo temporal, y hacer vos el cálculo a mano para ver cuánto va a impactar ese proyecto.

**Tomás Gómez** [00:22:46]: Acá no, no tiene bollete.

**Tomás Gómez** [00:22:50]: Bueno, está todo bastante claro.

**Tomás Gómez** [00:22:53]: Tommy, ¿querés que hacemos esto o un average?

**Tomás Gómez** [00:22:54]: Fijate que el average se acercó bastante más, 1.151 contra 1.097.

**Tomás Gómez** [00:22:59]: que interesante.

**Tomás Gómez** [00:23:00]: ¿Cuándo debería dar 1304?

**Tomás Gómez** [00:23:10]: Para Emma y Mika es lo mismo, van a tener que crear el coso y van a tener que usar o este número.

**Tomás Groshaus** [00:23:15]: Es más fácil si le decimos, che, usa exactamente lo mismo, porque no es que le vas decir, che, ponés 0,0002, le vas a decir, copia y pega.

**Tomás Groshaus** [00:23:28]: Ah, querés hacer, vos lo querés hacer para todos estos sitios que ya tienen data.

**Tomás Groshaus** [00:23:34]: Sí, Ok.

**Tomás Groshaus** [00:23:36]: Entonces, le diría, che, copiate y pegate los conversion factors, purchase electricity conventional, para que purchase electricity conventional menos, correcto, sea exactamente igual.

**Tomás Groshaus** [00:23:48]: Ok.

**Tomás Groshaus** [00:23:48]: Va a poder ver algo, la data no va exactamente igual.

**Tomás Groshaus** [00:23:51]: Hoy, Pipe, tenemos que manejar la expectativa y entender bien esto, y, bueno, nosotros tenemos que llevarnos, que te tengo que explicar todo esto de Caron, pero...

**Tomás Groshaus** [00:24:00]: Lo vas a ver, nos tenemos que llevar a hablar de esto con Emo, y para el arreudo hoy creo que estamos bien, Pipe, va a poder ver bien Scope 1 y Scope 2 y Juan, y le decimos.

**Tomás Groshaus** [00:24:11]: Estamos flagurando en esto.

**Tomás Groshaus** [00:24:13]: Sí, no creo que haya problema, ¿no, Pipe?

**Felipe Gutierrez Mosquera** [00:24:17]: En absoluto.

**Tomás Gómez** [00:24:20]: En absoluto, flaquito, va a estar mal.

**Tomás Gómez** [00:24:22]: No, para mí estamos muy bien.

**Felipe Gutierrez Mosquera** [00:24:26]: Ya con esto Rupert se va usar la tool y se va a escuchar, ¿viste?, para hacer el piloto click-off.

**Felipe Gutierrez Mosquera** [00:24:34]: Si Pipe, si Pipe está ahí, ¿no?

**Tomás Groshaus** [00:24:37]: En absoluto.

**Tomás Groshaus** [00:24:38]: ¿Qué pasa con Jesús Emoji?

**Tomás Groshaus** [00:24:41]: ¿Alguna, algo más para la reunión de hoy?

**Felipe Gutierrez Mosquera** [00:24:43]: Que queríamos definir.

**Tomás Gómez** [00:24:48]: No, no, perdón, sí, dejo hablar.

**Felipe Gutierrez Mosquera** [00:24:51]: Yo ya, mi parte ya está dicha.

**Felipe Gutierrez Mosquera** [00:24:54]: Me contestó el mail.

**Tomás Groshaus** [00:24:57]: No, tenemos que agarrar, ¿viste?, lo que nos mandó.

**Felipe Gutierrez Mosquera** [00:24:59]: no, el

**Tomás Groshaus** [00:25:00]: Yo le contesté en mail, si querés, léetelo, Pipe, así estás re en tema.

**Felipe Gutierrez Mosquera** [00:25:04]: Sí, ya lo leí, ya está bien.

**Felipe Gutierrez Mosquera** [00:25:07]: Espectacular.

**Tomás Groshaus** [00:25:08]: No, hay que hablar un poquito de eso y sí, para mí después ya es parte de ese acceso de, ok, empezamos a probarlo, o qué falta, Rupert, para que nos des el ok, que entiendo que son esas dos cosas que mandé en el mail, ¿viste?

**Tomás Groshaus** [00:25:24]: Ah, bueno, falta lo de la unidad de Natural Gas.

**Tomás Groshaus** [00:25:28]: Adimetric Tones as a unit for Natural Gas.

**Felipe Gutierrez Mosquera** [00:25:36]: ¿Cómo era eso?

**Tomás Gómez** [00:25:40]: Adimetric Tones as Natural Gas.

**Tomás Gómez** [00:25:46]: Está bien, no tenemos factores de conversión para eso, ¿no?

**Tomás Gómez** [00:25:50]: No, todavía no, eso medio zafamos por ahora, estamos jugando esa carta.

**Tomás Groshaus** [00:25:54]: Bien.

**Tomás Groshaus** [00:25:55]: Lo que habría que hacer, Pipe, vos sabés, VTU, ¿qué unidad es?

**Tomás Groshaus** [00:25:59]: Gracias.

**Tomás Groshaus** [00:26:01]: Tipo, si es una unidad de energía, una unidad de, o sea.

**Felipe Gutierrez Mosquera** [00:26:05]: Sí, sí, es una unidad de energía, es tipo, es yo, es.

**Tomás Gómez** [00:26:10]: BTU con B larga.

**Tomás Gómez** [00:26:12]: Ah, mirá, Bridges.

**Tomás Gómez** [00:26:14]: Watt.

**Felipe Gutierrez Mosquera** [00:26:18]: Dios.

**Tomás Groshaus** [00:26:22]: O sea, es equivalente a Kilo Watt ahora.

**Tomás Groshaus** [00:26:25]: ¿Es equivalente a BTU a Kilo Watt ahora?

**Tomás Groshaus** [00:26:28]: Claro.

**Tomás Groshaus** [00:26:32]: O sea, cuando decís es equivalente, me decís que hay una conversión etiométrica, por así decirlo, de BTU a Kilo Watt siempre.

**Tomás Gómez** [00:26:48]: Un BTU hora es igual a, en Kilo Watt, es 0.00029.

**Tomás Gómez** [00:26:57]: Pero eso es constante, independientemente del país.

**Felipe Gutierrez Mosquera** [00:27:00]: Y todas esas cosas.

**Tomás Gómez** [00:27:01]: Para mí no debería ser eso.

**Tomás Gómez** [00:27:04]: ¿Me entienden mis preguntas?

**Tomás Groshaus** [00:27:05]: ¿Es como una conversión de natural gas a kilowatts hora o es una conversión a emisiones que tienen 453.000 variables y lo hace un consultor?

**Tomás Gómez** [00:27:17]: Para mí debe ser.

**Tomás Groshaus** [00:27:22]: Debería ser distinto por país y todo, pero bueno, no sé.

**Tomás Groshaus** [00:27:27]: Última, digamos, Léa, por lo que aparece acá, no.

**Tomás Groshaus** [00:27:31]: Yo creo que no, si querés podés preguntarle a la HGPT, y después la otra unidad que nos había pedido, Terms.

**Tomás Groshaus** [00:27:45]: Bueno, yo me clavé una reunión en el MISA.

**Tomás Gómez** [00:27:48]: A ver, poné, Terms to VTU, ponele.

**Tomás Groshaus** [00:27:53]: Gracias.

**Felipe Gutierrez Mosquera** [00:27:55]: 10.000, 100.000 VTU.

**Felipe Gutierrez Mosquera** [00:27:59]: 10.000,.000.000.000.000.000.000

**Tomás Groshaus** [00:28:00]: A ver, ponés terms to kilowatts hora, a ver si...

**Tomás Groshaus** [00:28:07]: Bien, esto me encanta que Google tenga un cambio equivalente, perfecto.

**Tomás Groshaus** [00:28:13]: Entonces lo que tenemos que hacer acá, Tomy, es...

**Tomás Groshaus** [00:28:16]: ¿Te acordás de lo que habíamos hablado?

**Tomás Groshaus** [00:28:17]: Sí.

**Tomás Groshaus** [00:28:18]: Cuando pensaste que terminó todo, vuelve, vuelve a producto.

**Tomás Gómez** [00:28:23]: ¿Le agrego como un punto más o esto va a ser a futuro?

**Tomás Groshaus** [00:28:28]: Ahora lo vemos, pero si querés escribilo y nos ponemos de acuerdo.

**Tomás Groshaus** [00:28:31]: Pero lo habíamos dicho, ¿te acordás?

**Tomás Groshaus** [00:28:33]: Es subir...

**Tomás Groshaus** [00:28:35]: ¿Te acordás que dijimos hace tipo dos semanas que ellos iban a necesitar poder poner el impacto del proyecto de Natural Gas en kilowatts horas y no únicamente en Natural Gas?

**Tomás Groshaus** [00:28:53]: Proyecto en kilowatts horas.

**Tomás Gómez** [00:28:57]: Sí.

**Tomás Gómez** [00:28:57]: Sí.

**Tomás Groshaus** [00:29:00]: Bueno, en esa lo que vamos a tener que hacer es, básicamente lo que va a ver el usuario es, va a abrir el project impact, cuando quiere poner de que es el impacto va a tener, se le va a abrir el energy, se le van a abrir todas las variables, y va a tener una que sea natural gas en volume, por así decirlo entre paréntesis, y otra que sea natural gas en energy.

**Tomás Groshaus** [00:29:34]: ¿Y qué va a ser?

**Tomás Gómez** [00:29:35]: ¿Multiplicar los metros cúbicos por ese valor que mostró Pipe?

**Tomás Groshaus** [00:29:40]: No, o sea, ellos van imputear un kilowatts hora, entonces vas a tener que agregar esa variable en la fórmula, entonces, por ejemplo, para electricity, energy, energy, intensity, perdón, vas a tener que agregar la fórmula, natural gas convertido a kilowatts hora,

**Tomás Groshaus** [00:30:02]: Más natural gas en energy, esta otra variable que se dice.

**Tomás Groshaus** [00:30:09]: Perfecto, natural gas.

**Tomás Gómez** [00:30:12]: Bien, entonces va a ser básicamente, entonces lo dejo claro, va a ser crear Rometric, que va a ser natural gas en kilowatts, ¿verdad?

**Tomás Gómez** [00:30:28]: Y agregar a la fórmula de Energy Intensity.

**Tomás Groshaus** [00:30:31]: Sí, no sé si va a ser en kilowatts hora, ahí viene el único mini asterisco, por así decirlo.

**Tomás Groshaus** [00:30:38]: Así como oíste vos el natural gas y como está en volume, abrís las unidades y podés decir si querés imputearle metros cúbicos o litros, en esta nueva variable que va a ser de Energy, deberías poder imputearlo en kilowatts hora, por terms o BTUs.

**Tomás Groshaus** [00:30:56]: Ah, ok, vos querés jugar más suelto todavía.

**Tomás Gómez** [00:30:59]: Gracias.

**Tomás Gómez** [00:30:59]: Gracias.

**Tomás Gómez** [00:30:59]: Gracias.

**Tomás Gómez** [00:31:01]: Está bien, me encanta.

**Tomás Groshaus** [00:31:02]: Pará, pero no creo que lleguemos a tenerlo parado.

**Tomás Gómez** [00:31:04]: yo lo que sí estoy seguro que...

**Tomás Gómez** [00:31:06]: No, no, para hoy no, para hoy no.

**Tomás Gómez** [00:31:08]: Pero la variable la puedo crear hoy igual y ya dejarla en la fórmula.

**Tomás Gómez** [00:31:12]: ¿O querés que espere?

**Tomás Groshaus** [00:31:12]: Pero no, porque hay que hablarlo con Emma, hay que hacer un par de cosas ahí, no creo que haya salido tan fácil.

**Tomás Groshaus** [00:31:18]: Tengo algunas preguntas, si querés, anotate ahí como red flag question.

**Tomás Groshaus** [00:31:22]: Bien.

**Tomás Groshaus** [00:31:23]: Que sea, básicamente, o sea, la voy a decir bastante porque no sé cómo formularla, pero ¿Estás de acuerdo, Tomi Gómez, que la data que nos van a pasar seguramente de natural gas sea en metros cúbicos?

**Tomás Groshaus** [00:31:39]: Sí.

**Tomás Groshaus** [00:31:41]: Y vos vas tener esta nueva variable falopa que se llame natural gas energy, porque querés que impacte después en energy intensity y estás haciendo la suma de esas dos natural gas para que impacte, ¿no?

**Tomás Groshaus** [00:31:51]: Básicamente.

**Tomás Groshaus** [00:31:51]: Mi pregunta es, si esta variable de ponerle tiene toda data cargada en cero y tenga un proyecto...

**Tomás Groshaus** [00:32:00]: Creo que debería restarle 100 a esa variable.

**Tomás Groshaus** [00:32:03]: ¿Hay alguna restricción en el código?

**Tomás Gómez** [00:32:05]: Tengo data cargada en cero, repetí, ahí, si está variable.

**Tomás Groshaus** [00:32:09]: Tengo data cargada en cero de natural gas kWh, ¿no?

**Tomás Groshaus** [00:32:13]: Sí, solo existe la variable, no hay data.

**Tomás Groshaus** [00:32:16]: Solo existe la variable.

**Tomás Groshaus** [00:32:16]: Yo voy y quiero hacer un proyecto que me ahorre esas 100.

**Tomás Groshaus** [00:32:20]: Sí.

**Tomás Groshaus** [00:32:22]: Pero tenía cero data gathering.

**Tomás Groshaus** [00:32:24]: Está bien.

**Tomás Groshaus** [00:32:25]: Pero es parte de la fórmula de Energy Intensity, que ahí sí tengo otras cosas que suman más, es todo kWh.

**Tomás Groshaus** [00:32:31]: La pregunta es, ¿cuándo hace la resta?

**Tomás Groshaus** [00:32:34]: ¿Hay alguna restricción en el código?

**Tomás Groshaus** [00:32:39]: ¿Hay una restricción en el código?

**Tomás Groshaus** [00:32:42]: La pregunta, sí.

**Tomás Groshaus** [00:32:43]: ¿Hay una restricción en el código que haga que, si la variable es cero, no impacte el proyecto?

**Tomás Groshaus** [00:32:51]: Esto, yo creo que no.

**Tomás Groshaus** [00:32:53]: Creo que hoy no estábamos poniendo ningún límite.

**Tomás Groshaus** [00:32:56]: No debería haber.

**Tomás Groshaus** [00:32:58]: Pero la nota sí me lo llevo con igual.

**Tomás Gómez** [00:33:03]: ¿Ahora lo querés a Ivo más que a mí?

**Tomás Groshaus** [00:33:07]: Sí, no es difícil, ¿no?

**Tomás Gómez** [00:33:10]: Bien, acá tengo.

**Tomás Gómez** [00:33:11]: La pregunta que vos querías hacer es, ¿existe una restricción en el código si una raw variable estaba 100-0 y un proyecto impacta y hace que quede negativa?

**Tomás Groshaus** [00:33:20]: Esa es la pregunta.

**Tomás Groshaus** [00:33:21]: ¿Repetíme la pregunta?

**Tomás Groshaus** [00:33:23]: ¿Existe una restricción en el código?

**Tomás Gómez** [00:33:25]: Si una raw variable, cualquiera que sea, está vacía, ¿hay un proyecto que impacta y hace que quede negativo?

**Tomás Gómez** [00:33:32]: Cursos.

**Tomás Gómez** [00:33:33]: ¿No?

**Tomás Groshaus** [00:33:34]: Esa es la pregunta, perfecto.

**Tomás Groshaus** [00:33:38]: Bien.

**Tomás Groshaus** [00:33:40]: No, para hoy, Tommy, con lo primero que hablamos, ¿está bien?

**Tomás Groshaus** [00:33:44]: Bien.

**Tomás Groshaus** [00:33:46]: Me llevo yo con Ivo a pensar esto y armarlo de hablar con Emma.

**Tomás Groshaus** [00:33:51]: Perfecto.

**Tomás Gómez** [00:33:52]: La última confirmación que te voy a pedir, ya sé que es un sí, es usar todos los mismos conversion factors que tenemos.

**Tomás Gómez** [00:34:00]: En Electricity Conventional, para Electricity Conventional, Minus Rex, eso se lo voy a pedir a por Target Tracking, a Mika y a Emma, ¿está bien?

**Tomás Gómez** [00:34:08]: Para todos los siglos.

**Tomás Groshaus** [00:34:09]: pedir, sí, hace hacerlo, pedirle que te copien el Conversion Factor de Purchase Electricity y que lo peguen en Purchase Electricity Minus Rex.

**Tomás Groshaus** [00:34:21]: Perfecto.

**Tomás Gómez** [00:34:23]: De todos los siglos.

**Tomás Gómez** [00:34:28]: Bueno, ah, Tomy, yo ahora tengo que salir a la veterinaria, vuelvo tipo 3 de la tarde.

**Tomás Gómez** [00:34:35]: Che, bueno, dale, ahora les aviso cuando se vaya a quedando todo, y los vuelvo locos con mis bullet points.

**Ivo Kalaizic** [00:34:42]: Vale.

**Ivo Kalaizic** [00:34:43]: ¿Está bien?

**Ivo Kalaizic** [00:34:44]: ¿Algo más?

**Tomás Gómez** [00:34:45]: Se prendió fuego, Pope, no se lo viste.

**Tomás Gómez** [00:34:47]: Se lo viste.

**Felipe Gutierrez Mosquera** [00:34:49]: Se lo sabía, lo vi el otro día.

**Tomás Gómez** [00:34:50]: Che, bueno, se prendió fuego, boliche acá en Pilar, que es bastante croto, pero está re lindo.

**Tomás Gómez** [00:34:56]: Qué sé yo, cuando no había nada, ibas ahí, y nada, se prendió.

**Tomás Gómez** [00:35:00]: Yo fue, fueron los de banana, sí o sí.

**Tomás Gómez** [00:35:03]: Sí.

**Tomás Groshaus** [00:35:04]: Ivo, una pregunta, perdón, también estamos con otra cosa de Coca, lo que me preguntaste de Tobias, yo siento que no lo quiere ver por Production 9, pero le puedo armar ahora una Pivot, pero confirmaste que esté bien la data, ¿no?

**Ivo Kalaizic** [00:35:18]: Está bien, confirmé para dos sitios, está bien, falta igual para poder armar la Pivot, falta un campo.

**Ivo Kalaizic** [00:35:26]: ¿Cuál?

**Ivo Kalaizic** [00:35:27]: falta el campo de consumo.

**Ivo Kalaizic** [00:35:30]: El Consumption Target 2030, para poder hacer la edición.

**Ivo Kalaizic** [00:35:35]: Este es.

**Ivo Kalaizic** [00:35:37]: Yo, para, en el screen yo te quiero mandar a Emma, creo que...

**Ivo Kalaizic** [00:35:40]: Pero solo está la producción, uso, no está el Consumption.

**Ivo Kalaizic** [00:35:43]: No está, claro.

**Ivo Kalaizic** [00:35:45]: Entonces, pero yo lo que quiero entender, para mí él lo que quiere es la imagen total de la company, que la puedo armar yo en Excel, lo copio y lo puedo, me lleva tres minutos.

**Ivo Kalaizic** [00:35:55]: Chico, yo me bajo, me bajo en Colby, la razón, no, no.

**Ivo Kalaizic** [00:36:02]: ¿Se entiende, Tomi, lo que le digo?

**Ivo Kalaizic** [00:36:03]: Tipo, lo puedo, viste, seleccionarlo, copiarlo en el Excel y...

**Ivo Kalaizic** [00:36:18]: Hola, hola.

**Ivo Kalaizic** [00:36:19]: Hola, ¿me escuchás?

**Tomás Groshaus** [00:36:20]: Ahora sí, se me cortó internet.

**Ivo Kalaizic** [00:36:22]: Puedo seleccionarlo y copiarlo, como hice para el archivo que compartí a las chicas, el que vamos a revisar hoy, viste, de production.

**Ivo Kalaizic** [00:36:30]: Ah, pues es un copy-paste de todo eso en un segundo.

**Ivo Kalaizic** [00:36:33]: una paja, pero me lleva tres minutos, dos minutos.

**Ivo Kalaizic** [00:36:35]: Lo hago rápido.

**Tomás Groshaus** [00:36:38]: Ok.

**Tomás Groshaus** [00:36:40]: ¿Te parece?

**Ivo Kalaizic** [00:36:41]: Sí.

**Ivo Kalaizic** [00:36:42]: Dale.

**Tomás Groshaus** [00:36:43]: Ahí igual le escribí.

**Tomás Groshaus** [00:36:46]: ¿A Rodías?

**Tomás Groshaus** [00:36:48]: No, a Emma, a ver si podía agregar el consumo.

**Ivo Kalaizic** [00:36:54]: Dejá por poner banca que la solucione yo copiarme pegando, así le saco la tarea.

**Ivo Kalaizic** [00:36:58]: Ok, decíle.

**Tomás Groshaus** [00:37:00]: Hola.

**Tomás Groshaus** [00:37:01]: Decirle, expliqué ahí por el chat, decir, tranqui, lo hago yo copiando y pegando el consumo y listo.

**Tomás Groshaus** [00:37:07]: Listo, dale, abrazo.

**Tomás Groshaus** [00:37:09]: Bueno, ¿armo será piloto o lo armás vos?

**Ivo Kalaizic** [00:37:13]: Lo armo yo, pero no vamos a ver las lines, vamos a ver tipo a nivel company.

**Ivo Kalaizic** [00:37:18]: ¿Viste el screenshot que mandaste vos de lo que él quiere?

**Ivo Kalaizic** [00:37:20]: Eso sí se puede hacer.

**Ivo Kalaizic** [00:37:22]: sí.

**Tomás Groshaus** [00:37:22]: No, le damos las dos cosas, si ya tenemos las lines, le ponemos en dos tabs y se lo mandamos.

**Tomás Groshaus** [00:37:28]: Está en una que sea for company y la otra.

**Ivo Kalaizic** [00:37:32]: Eso no sé si lo puedo hacer rápido, porque creo que me tengo que meter en calculator.

**Ivo Kalaizic** [00:37:36]: No, lo de las lines ya lo tenemos, es lo que nos mandó Ema, sin el consumption, no pasa nada.

**Ivo Kalaizic** [00:37:40]: Ok, listo, dale.

**Ivo Kalaizic** [00:37:42]: Pero no está el valor del bur, no está el valor del bur.

**Tomás Groshaus** [00:37:46]: ¿No está el valor del bur?

**Ivo Kalaizic** [00:37:47]: No.

**Ivo Kalaizic** [00:37:48]: ¿Es lo que nos exportó?

**Tomás Groshaus** [00:37:50]: No.

**Ivo Kalaizic** [00:37:52]: es radísimo, ¿no?

**Ivo Kalaizic** [00:37:56]: Está bien en pantalla.

**Ivo Kalaizic** [00:37:58]: Gracias.

**Ivo Kalaizic** [00:38:00]: Estoy viendo delictamente el file.

**Tomás Groshaus** [00:38:03]: Ok, mirá si querés mi pantalla un segundo.

**Ivo Kalaizic** [00:38:06]: No, no, pará.

**Tomás Groshaus** [00:38:14]: Esta tarde traigo en hardcore.

**Tomás Gómez** [00:38:21]: Bueno, voy a trabajar con Colgate, si necesitan ayuda con esto, Chau, chau, bien.

**Tomás Groshaus** [00:38:33]: ¿Me seguís?

**Ivo Kalaizic** [00:38:34]: Hasta acá, hasta este punto acá, de target tracking, ¿qué es esto?

**Ivo Kalaizic** [00:38:42]: No, no, sí, está mal el script.

**Ivo Kalaizic** [00:38:43]: Son estos campos.

**Ivo Kalaizic** [00:38:45]: Y después vienen las líneas.

**Ivo Kalaizic** [00:38:46]: Me falta consumption, target y burro.

**Ivo Kalaizic** [00:38:50]: Yo lo que te digo es, lo que él quiere es verlo.

**Ivo Kalaizic** [00:38:54]: Tu screenshot, company, le...

**Ivo Kalaizic** [00:38:57]: No, hagamos algo.

**Ivo Kalaizic** [00:38:59]: Tipo, at...

**Tomás Groshaus** [00:39:04]: Hacelo a la boca, y mientras tanto veamos si Emma nos lo...

**Tomás Groshaus** [00:39:07]: seguro va a ser un toque agregar esas tres variables, pero hagámoslo así, lo tenemos antes de la RU y quedamos bien con Tobías y...

**Tomás Groshaus** [00:39:14]: Chau.

**Tomás Groshaus** [00:39:16]: Gracias, eh, solida idea.

**Ivo Kalaizic** [00:39:18]: Vale.

**Ivo Kalaizic** [00:39:20]: Chau.

**Ivo Kalaizic** [00:39:30]: Gracias.
