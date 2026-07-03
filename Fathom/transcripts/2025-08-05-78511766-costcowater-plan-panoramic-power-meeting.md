# Costco/Water Plan-Panoramic Power Meeting
**Date:** 2025-08-05T14:25:26Z
**URL:** https://fathom.video/calls/371488080
**Participants:** Tomas Gomez (tomas.gomez@waterplan.com), Andrés Estrada (andreseg@eurotecsa.com), Ivo Kalaizic (ivo.kalaizic@waterplan.com)

---

**Maggie Fashbaugh** [00:00:00]: How to treat that, if that's okay with you, Doron.

**Maggie Fashbaugh** [00:00:03]: Yeah, so hi, everybody.

**Doron Shaul** [00:00:06]: Well, basically, when we look at your export job with the one-minute resolution, the data that comes from our one-minute aggregation table, and sometimes the, let's say, our bridge sends every few seconds data with measurements.

**Doron Shaul** [00:00:37]: So in order to have the full minute in our aggregation table, we need a few measurements of the same minute.

**Doron Shaul** [00:00:53]: And we aggregated it until we have this one-minute data, full data.

**Doron Shaul** [00:01:00]: And so this is why sometimes the period is not one minute, is less than one minute, because we haven't received all the measurement yet for that particular minute.

**Doron Shaul** [00:01:14]: And in the export jobs, we have a scheduled task running every, depending on the export job frequency, running every five minutes, 15 minutes, and getting the data from this one minute aggregation table, and sends it to the user.

**Doron Shaul** [00:01:37]: And sometimes, as I said, because it's happening, let's say a minute, like, let's say 12 and 30 seconds, or something like that, we might have the 12 minutes, just partial.

**Doron Shaul** [00:02:00]: So, we're just sending what we have currently.

**Doron Shaul** [00:02:07]: And basically, in the next, that's what happens pretty much 99% of the time.

**Doron Shaul** [00:02:16]: At the next execution of the export job, we're getting the next 5 minutes, 15 minutes that we have.

**Doron Shaul** [00:02:25]: And the, again, let's take example 12, and the other measurements already are in the aggregation table, and we send the full data now.

**Doron Shaul** [00:02:40]: So, we need our clients to override, let's say, duplicate data.

**Doron Shaul** [00:02:50]: If you're getting the same meter ID and the same measurement time.

**Doron Shaul** [00:02:55]: So, the latest is always the most.

**Doron Shaul** [00:03:00]: Most up-to-date measurement.

**Doron Shaul** [00:03:04]: And once you overwrite it, you won't have duplicates.

**Doron Shaul** [00:03:07]: You will have the right data and the full data.

**Doron Shaul** [00:03:12]: And basically, that's it.

**Luis Garza** [00:03:20]: Did you understand, Tomás, and the Costco team, about this?

**Luis Garza** [00:03:29]: Yes.

**Tomás F. Gómez** [00:03:30]: Thank you, Luis.

**Tomás F. Gómez** [00:03:31]: Yes, I still have some doubts regarding how we should treat this data as we are obtaining these values that we shared in the past with Andres.

**Tomás F. Gómez** [00:03:41]: I also reviewed the data that we obtained from today, like from the meters today, for one meter ID in one site in particular.

**Tomás F. Gómez** [00:03:51]: And we are still seeing these strange values.

**Tomás F. Gómez** [00:03:56]: I mean, not strange, because what it was explained by...

**Tomás F. Gómez** [00:04:00]: Doron, it was super clear, but we still have doubts of how we should treat this data to avoid showing data that it's not correct and to, like, provide the best service from our site, from Waterplan to Costco.

**Tomás F. Gómez** [00:04:16]: So, one, I have also two examples, if you want, of course, I can share my screen from data that I've seen from today.

**Tomás F. Gómez** [00:04:24]: And what I would like to know also, like, the question that follows up is, we Waterplan, if we have a filter or treat the data only looking at the data with one-minute resolution, would it be okay to use that data?

**Tomás F. Gómez** [00:04:41]: Because we are not only seeing decimal values for resolutions, we are also seeing, like, 60 minutes resolution, which is duplicating the data we have for one hour in particular.

**Tomás F. Gómez** [00:04:54]: So, this is, like, making some noise in some Costco sites because they look at this data and then they say, like,

**Tomás F. Gómez** [00:05:00]: This is the double of what we consume, the double of the volume that we are using.

**Tomás F. Gómez** [00:05:05]: So that's another insight that we obtained from this analysis.

**Doron Shaul** [00:05:14]: Basically, yes, you can take only the ones with the resolution one.

**Doron Shaul** [00:05:20]: So these are the full measurements per minute.

**Doron Shaul** [00:05:25]: And regarding the 60-minute resolution, I noticed that you have another export job with a resolution of one hour, which makes sense.

**Doron Shaul** [00:05:38]: You'll see 60 minutes in the period column.

**Doron Shaul** [00:05:42]: And we looked at the file in the FTP server, and I didn't find any file with the 60 minutes resolution in.

**Doron Shaul** [00:06:00]: The one-minute export job files.

**Doron Shaul** [00:06:03]: So, there might be a chance that you're taking those two export jobs and files and just merging it or combining it to a single one.

**Doron Shaul** [00:06:18]: And that's why you see some measurements with one-minute resolution, some with 60-minute resolution.

**Doron Shaul** [00:06:24]: Resolution?

**Doron Shaul** [00:06:27]: Okay.

**Tomás F. Gómez** [00:06:28]: Yes, what we are doing on our end is, like, we are fetching that data, like, I think it was, like, two or three minutes.

**Tomás F. Gómez** [00:06:36]: So, every two or three minutes, we are going to look for these files, and we obtain all this information, we transform it, and we save it in our database.

**Tomás F. Gómez** [00:06:45]: So, that's what we are currently doing with the data.

**Tomás F. Gómez** [00:06:48]: So, we are, like, constantly going and looking for the data to keep everything updated on our site.

**Tomás F. Gómez** [00:06:55]: But, okay.

**Tomás F. Gómez** [00:06:56]: And I have one example of 60-minute resolutions.

**Tomás F. Gómez** [00:06:59]: If you want, I can share.

**Tomás F. Gómez** [00:07:00]: My screen, I don't want like to take over this, but let me see if I can do it right now.

**Tomás F. Gómez** [00:07:05]: So here I detected, let me know once you can look correctly at my screen.

**Tomás F. Gómez** [00:07:12]: Okay, amazing.

**Tomás F. Gómez** [00:07:13]: So here what I did was like this information, you can see the Excel, right?

**Tomás F. Gómez** [00:07:19]: Yes.

**Tomás F. Gómez** [00:07:19]: Yes, Tom.

**Tomás F. Gómez** [00:07:20]: Okay.

**Tomás F. Gómez** [00:07:20]: Yes, yes.

**Tomás F. Gómez** [00:07:21]: Great.

**Tomás F. Gómez** [00:07:22]: So here what we have is one meter ID for one, like only one meter name for this site in particular.

**Tomás F. Gómez** [00:07:30]: And here what I saw is that for this hour in particular, this is like all the data merged by hour, we have an average resolution minutes, which is higher than one.

**Tomás F. Gómez** [00:07:40]: So what I did then was in another file with maximum resolution, going to see where do we have that extra value that it's not giving us the average resolution of one minute.

**Tomás F. Gómez** [00:07:54]: So here, if you see, I have 61 values.

**Tomás F. Gómez** [00:08:01]: So, the sum is, sorry, I will grab this one, and here we are.

**Tomás F. Gómez** [00:08:06]: So, here we have 61 values, and for this case, we have a 60-minute resolution, which is this line, and here we are having the issue that I mentioned previously.

**Tomás F. Gómez** [00:08:18]: have, like, this total value is the same as the sum of all of the other lines.

**Tomás F. Gómez** [00:08:25]: So, we are having, like, duplicated values here.

**Tomás F. Gómez** [00:08:27]: If you see, like, the sum is 1.81 against 1.8.

**Tomás F. Gómez** [00:08:34]: This is happening, this is from this morning, I think, like, four hours ago or something like that.

**Tomás F. Gómez** [00:08:40]: And then we have another case, which is the one that we already talked about, where we have a resolution which is lower than one minute.

**Tomás F. Gómez** [00:08:50]: I can take a look at this.

**Tomás F. Gómez** [00:08:52]: Let me see if I can filter this.

**Tomás F. Gómez** [00:08:54]: Let if I Oh, Oh, five.

**Tomás F. Gómez** [00:08:59]: five.

**Tomás F. Gómez** [00:09:01]: So here, for example, we have, for this case, we have a resolution which is lower than one minute.

**Tomás F. Gómez** [00:09:09]: So those are the two cases that we saw from Waterplan, which are the ones that we talked about.

**Tomás F. Gómez** [00:09:17]: And yes, and then the final output of this, if you're interested in, it's in our platform when we are going to look to these values.

**Tomás F. Gómez** [00:09:26]: Like we want to see, for example, the consumption in particular for one day and one hour, we can see that maybe this value, 13, it's being duplicated because of that resolution of 60 minutes.

**Tomás F. Gómez** [00:09:39]: And so that's like the main concern that we have.

**Tomás F. Gómez** [00:09:44]: Yes, so I saw some example, Maggie shared with me the file that you attached in the ticket, in the Zendesk ticket.

**Doron Shaul** [00:09:56]: And basically, those are not our files.

**Doron Shaul** [00:10:00]: Those are yours.

**Doron Shaul** [00:10:04]: So, again, I need to see, to understand if it's happening on our side, because if it happens on your side, because you're merging files or, I don't know, doing something else, so I can do much about it.

**Doron Shaul** [00:10:24]: So, again, do you have our files, or do you just?

**Tomás F. Gómez** [00:10:32]: Yes, we have also a table with all the process files and the ID of each of the files that we are processing.

**Tomás F. Gómez** [00:10:40]: So, maybe after this meeting, I can share more details with you, like, of these two examples that I shared, which are the files that we are taking, and, like, for you to take a look at which are the files that are bringing that data.

**Tomás F. Gómez** [00:10:56]: Yeah, it will be great, because I walked through some.

**Doron Shaul** [00:11:00]: Of your files, as I said, and I didn't see any 60 minutes resolution in the one-minute export job files.

**Doron Shaul** [00:11:10]: And again, regarding the decimal resolution, as you can see in your file, in the next row, you have the same measurement time for the same meter with the one-minute resolution.

**Doron Shaul** [00:11:28]: And when I looked at our files, those come from two different files, and one after the other, by the way, because that makes sense.

**Tomás F. Gómez** [00:11:43]: Okay.

**Tomás F. Gómez** [00:11:44]: I just want your concern is that the sum of the amounts of the ones, one minute, it's not the same as the 60 minutes?

**Tomás F. Gómez** [00:12:01]: No, the sum is giving us the same number, although we may have a decimal difference, which for one particular case, it does not impact too much, but if we consider all the meter IDs and all the sites, it's a difference.

**Tomás F. Gómez** [00:12:18]: The concern here is having like more than 60 values for one hour, and that, when I say more than 60 minutes for one hour, can be like decimal values of resolution or 60 minutes resolution or anything in the middle, which is not one.

**Tomás F. Gómez** [00:12:33]: I mean, if we have five minutes resolution and a value, it's also an issue.

**Tomás F. Gómez** [00:12:38]: So, yes.

**Maggie Fashbaugh** [00:12:39]: But, so, what Daron explained was that in those cases where you do see the duplicates, and let's say one is a lower resolution than the other, you know, it's like a 58.2, and then there's a 60.

**Maggie Fashbaugh** [00:12:54]: We're saying that on your side, take the value associated to 60, because essentially that was

**Maggie Fashbaugh** [00:13:00]: The newest entry, and so that should override.

**Maggie Fashbaugh** [00:13:06]: And maybe the number, the amount of rows will line up better that way, but that mechanism needs to be applied on your side when you're grabbing and taking those files.

**Maggie Fashbaugh** [00:13:16]: Okay.

**Maggie Fashbaugh** [00:13:17]: Okay.

**Tomás F. Gómez** [00:13:20]: Yes, I think that from our end, we need to use the one-minute resolution because of how we are working with this data, not only for the dashboard, but only also for other, like, other things that we are doing for Costco.

**Tomás F. Gómez** [00:13:35]: And so, okay.

**Tomás F. Gómez** [00:13:37]: Yes, on our end, we can do that.

**Tomás F. Gómez** [00:13:39]: We can start working, like, filtering by one-minute resolution and see if those values, then what we are doing is, like, iterating with a particular side of Costco to take a look at this data together.

**Tomás F. Gómez** [00:13:50]: And there is where we detected these, like, differences we have.

**Tomás F. Gómez** [00:13:54]: So, what we can do is start filtering and working with only one-minute resolution, avoiding this decision.

**Tomás F. Gómez** [00:14:00]: or 60-minute values, and start taking a look at it in detail in the close future of the following week or two weeks to see if we still see some differences, if the side of Costco that we're working with have some differences with our data to be completely sure that taking this one-minute resolution will avoid having any mistakes on our end or Costco end.

**Tomás F. Gómez** [00:14:31]: And, yes.

**Maggie Fashbaugh** [00:14:44]: Excellent.

**Maggie Fashbaugh** [00:14:45]: Okay.

**Tomás F. Gómez** [00:14:46]: Yes, I think that from my end, I don't have any more comments.

**Tomás F. Gómez** [00:14:50]: I will then share, like, the files that we are using, and we are gathering this data for you.

**Tomás F. Gómez** [00:15:00]: To take a look, maybe in detail, but just from our end, I think that's okay, and we will advance, like, with only one minute resolution.

**Customer Success** [00:15:09]: One point there, just to be clear, Andres, principally, in Eurotecsa's platform where Costco sites check currently the consumption, you're using the 60-minute resolution just to be aligned on showing the same data between Waterplan and the current platform.

**Customer Success** [00:15:32]: Yeah, I understand.

**Andres** [00:15:34]: This is more panoramic power question, but I understand, yes, in time view, you use the resolution of one minute, to make the scale aggregation.

**Maggie Fashbaugh** [00:15:47]: Yeah.

**Maggie Fashbaugh** [00:15:47]: Yeah, correct.

**Maggie Fashbaugh** [00:15:49]: Sorry, so you are aggregating the one-minute resolution, or you're using, you're filtering by the 60-minute resolution?

**Customer Success** [00:15:58]: Yes, the question will be...

**Maggie Fashbaugh** [00:16:00]: be...

**Luis Garza** [00:16:00]: When we display, like, the hourly, or if we display the 15 minutes or one minute, are we using, like, the same one-minute resolution, or are we using different resolutions of data?

**Maggie Fashbaugh** [00:16:13]: So depending on what you're looking at, if you're looking at, let's say, flow or current, that's going to be a stream of one-minute, you know, resolution through.

**Maggie Fashbaugh** [00:16:22]: But if you're looking at the energy, that's aggregated together in, like, hourly, like you'll see the bar graphs.

**Luis Garza** [00:16:32]: At the end, we're receiving the data every 10 seconds, so we're adding everything for, yeah, for one minute.

**Luis Garza** [00:16:40]: That's why sometimes you see point something when all the data we haven't received.

**Luis Garza** [00:16:45]: But the display we use, the smallest display resolution is one-minute resolution in the platform.

**Luis Garza** [00:16:52]: That's right.

**Luis Garza** [00:16:54]: Great.

**Luis Garza** [00:16:55]: Okay.

**Luis Garza** [00:16:55]: But all the data we receive is every 10 seconds, and then we show it.

**Luis Garza** [00:17:00]: At the minimum of one minute.

**Luis Garza** [00:17:02]: Okay.

**Luis Garza** [00:17:05]: Okay.

**Luis Garza** [00:17:07]: Amazing.

**Luis Garza** [00:17:08]: Okay.

**Luis Garza** [00:17:09]: Okay.

**Luis Garza** [00:17:09]: And just one more thing.

**Customer Success** [00:17:12]: Tommy later will share the files that we are using right now, but from, I think it was Doron's side, is there any way to check which information you are sharing right now to us?

**Customer Success** [00:17:23]: Like to do that double check?

**Customer Success** [00:17:26]: Yeah, that's what I did.

**Doron Shaul** [00:17:27]: I can do another check, but I looked at the files that we're sending, we sent you, and as I said, the decimal period, I think, will now understand why it happens.

**Doron Shaul** [00:17:49]: And the 60 minutes, again, I sent it just in the other expert job, which is in an hourly resolution.

**Doron Shaul** [00:18:00]: So.

**Maggie Fashbaugh** [00:18:01]: So what Doron means, or we looked together, we looked through cross-reference those times where you guys shared in your files, there was a 60-minute random row in a sea of one-minute resolutions.

**Maggie Fashbaugh** [00:18:13]: On our side, we looked at both of those files, and we didn't see the mix.

**Maggie Fashbaugh** [00:18:17]: So, yes, there are decimals, but they're decimaled closely to the resolution of the file.

**Maggie Fashbaugh** [00:18:25]: So, with the one-minute, you might see 0.6, and in the 60-minute ones, we saw, like, maybe 57.3 or something, but we never saw – we haven't seen on our file side yet the case that you guys shared, which was a one-minute file, but then one row was 60.

**Maggie Fashbaugh** [00:18:43]: We have not seen that on our site.

**Maggie Fashbaugh** [00:18:45]: That's the reason why we were saying that this could be a result of you guys merging the multiple types, or they're getting pulled maybe to the same place, and that's where the collision's happening.

**Maggie Fashbaugh** [00:18:55]: So I actually agree, Tomas, that your test to just isolate and use the one-minute for now.

**Maggie Fashbaugh** [00:19:00]: Might actually resolve that part, because you guys are probably summing it up on your site anyway, with how you're receiving it, so that duplicate could be the collision part.

**Maggie Fashbaugh** [00:19:11]: Okay, okay.

**Doron Shaul** [00:19:13]: Those two export jobs files are sitting in the same folder in the FTP server, so if you just go to that folder and fetching files without, I don't know, filtering by name.

**Doron Shaul** [00:19:25]: Right.

**Doron Shaul** [00:19:25]: So, yeah, you're taking both the one-minute resolution and the 60-minute resolution, and you're just merging it, basically.

**Doron Shaul** [00:19:34]: So, I think that that might be the issue.

**Doron Shaul** [00:19:39]: Okay.

**Tomás F. Gómez** [00:19:42]: Great.

**Tomás F. Gómez** [00:19:43]: I think I don't have any further doubts from my end.

**Tomás F. Gómez** [00:19:46]: I mean, we are going to do this test, working with one-minute resolution, and also share with you, like, the detail of which files are we using that might have these mistakes, for you, like, to maybe take a look, and maybe we are, like, when gathering...

**Tomás F. Gómez** [00:20:00]: This data and going like to fetch this data, even between two or three minutes, we are grabbing something that then it's clean on your end, and we are still saving that information, which is the root cause of what are we seeing these mistaken values.

**Tomás F. Gómez** [00:20:19]: So, amazing.

**Maggie Fashbaugh** [00:20:25]: Great.

**Maggie Fashbaugh** [00:20:26]: Just to finish this, thank you, everyone.

**Customer Success** [00:20:29]: What do you think if by the end of the week from our site, we can modify the current script that we are using, adapting to the new resolution, and we can keep updating each other through email, just to validate that we are using the same data, and to, at the end of the week, and to, this resolved, okay?

**Customer Success** [00:20:57]: That's good.

**Maggie Fashbaugh** [00:20:59]: Amazing.

**Tomás F. Gómez** [00:21:05]: Andres, don't know if want to add anything from your site, Andres?

**Andres** [00:21:09]: No, we'll be in contact to see the information and we can share it and give okay if everything's fine.

**Andres** [00:21:20]: Perfect.

**Luis Garza** [00:21:20]: So thank you very much and please let us know how the new structure works from your site.

**Luis Garza** [00:21:27]: Of course, of course.

**Luis Garza** [00:21:28]: Thank you, Luis and Tim and Andres for setting up this meeting.

**Tomás F. Gómez** [00:21:32]: It's very useful for us.

**Tomás F. Gómez** [00:21:33]: So thank you very much and I hope my next team may bring good news regarding this data.

**Tomás F. Gómez** [00:21:38]: So thank you very much.

**Tomás F. Gómez** [00:21:40]: That's not great.

**Tomás F. Gómez** [00:21:40]: Thank you.

**Maggie Fashbaugh** [00:21:41]: Thank you.

**Maggie Fashbaugh** [00:21:42]: Thank you so much.

**Maggie Fashbaugh** [00:21:43]: Bye.

**Maggie Fashbaugh** [00:21:43]: Bye.

**Maggie Fashbaugh** [00:21:44]: Bye.
