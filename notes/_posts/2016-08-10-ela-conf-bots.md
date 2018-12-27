---
title: Organizing a conference with bots
image: 2016-08-10-ela-conf-bots-0.png
emoji: 🤖
tags:
  - Ela Conf
  - Zapier
---

Last year, [Ela Conf](http://elaconf.com) organizers and I relied on Google Forms for women to submit anything from talks to volunteer applications. Forms worked well for us, but reviewing abstracts in a spreadsheet wasn't exactly a fun thing to do. With the help of [Zapier](https://zapier.com/), I created some efficient little bots that keep us organized and motivated.

## Volunteer, proposals, and grant bot

Every time someone submits a volunteer application or an abstract, a new GitHub issue is created in our private repo and then our organizer Slack channel receives a ping:

{% include img.html class='img-half' src='2016-08-10-ela-conf-bots-1.png' alt='abstract' %}

{% include img.html class='img-half' src='2016-08-10-ela-conf-bots-2.png' alt='volunteerbot' %}

:raising_hand: **Under the hood:** First, I created a GitHub account @elaconfbot (so as to not inflate my GitHub graph, make it clear that I'm not creating new issues, and because bots are cute). I made a zap in Zapier that will submit a new GitHub issue by @elaconfbot once a new row in the form's spreadsheet is added (aka someone fills out the form). We also have a Slack integration that watches the repo for new issues.

With Zapier, you can also assign labels and even add issues to milestones as someone submits a form. Now instead of reading a spreadsheet, we'll be able to comment on each abstract and use all of GitHub's organizational features. I absolutely adore this workflow.

We have this workflow set up for all of our forms:

{% include img.html class='img-half' src='2016-08-10-ela-conf-bots-3.png' alt='form workflow' %}

## Welcomebot

Every time a someone requests to join our Slack channel, we get pinged in our organizer channel:

{% include img.html class='img-half' src='2016-08-10-ela-conf-bots-4.png' alt='welcomebot' %}

:wave: **Under the hood:** Zapier listens for additions to the spreadsheet and sends a message to our Slack channel. We can now add women to our community even faster!

{% include img.html class='img-half' src='2016-08-10-ela-conf-bots-5.png' alt='zapier workflow' %}

## Ticketbot

Every time someone buys a ticket, we get pinged in our organizer channel:

{% include img.html class='img-half' src='2016-08-10-ela-conf-bots-6.png' alt='ticketbot' %}

:ok_woman: **Under the hood:** I created a catch hook in Zapier and entered it in [nvite](https://nvite.com)'s RSVP webhook setting (thanks for being a sponsor, nvite!) as the trigger. I think this is our favorite bot!

{% include img.html class='img-half' src='2016-08-10-ela-conf-bots-7.png' alt='ticketbot' %}

## Bots, bots, and more bots

Every time we get a ping from our :raising_hand: :wave: :ok_woman: bots, we all get excited. Seeing women wanting to participate with and at Ela Conf in real-time is much more magical and meaningful than I think we all anticipated.

It's also going to be fun watching @elaconfbot's contribution graph:

{% include img.html class='img-half' src='2016-08-10-ela-conf-bots-8.png' alt='contributions' %}

Can you tell when we opened our call for proposals?

My next challenge will be building an anonymous feedback system for our speakers. I have a suspicion that it will involve some type of form, GitHub, and then some type of delivery service. I cannot wait to get started!

If you enjoyed this post, love bots, awesome systems, and advancing women in tech, please consider becoming an Ela Conf sponsor!
