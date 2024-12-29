+++
title = 'Raspberry Pi NextCloud Server'
date = 2024-12-28
+++

![PI NAS](https://images.sidearmdev.com/convert?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fwww2.sfstategators.com%2Fimages%2F2023%2F2%2F10%2F7I2A9297.png&type=webp) 

Cloud Storage, store and access all of your files, photos, and videos from anywhere. It's amazing ... until you hit the dreaded storage limit.

Recently, I ran into this exact problem. Apparently years of wrestling match videos takes a lot of space from google drive. After searching for a solution, I came across **self-hosting**.

Yes, I could just buy more cloud storage, however self-hosting has a couple of advantages over commercial options:
1. **Cost**  
Self-hosting eliminates recurring subscription fees making it a great long term solution.
2. **Privacy**  
I own my server and data which means my data can't be accessed by third-parties and stays private.
3. **Control**  
Home servers are highly customizable and flexible. I can adjust, modify, and upgrade my server according to my needs.
4. **Skill Development**  
Building and experimenting with a home server is a great way to gather technical knowledge about networking, containers, hacking, and more.

This Christmas I got a Raspberry Pi 5 which was the perfect tool for starting my self-hosting journey. In this blog I will go over the steps I went through to set up NextCloud on my Pi.

## NextCloud
NextCloud provides free, open source software for self-hosting files. Besides cloud storage, NextCloud also offers apps for email, calendars, and even self-hosted AI chat bots. I'll only be focusing cloud storage, but will probably look into the other NextCloud features in the future.

## Equipment Used
- Raspberry Pi
- External Hard Drive

For my setup I used a Western Digital 1TB My Book External Hard Drive, however external HDD or SSD that can connect to the Pi through USB should work.

## Resources
- [How to Setup a Raspberry Pi Nextcloud Server](https://pimylifeup.com/raspberry-pi-nextcloud-server/)
