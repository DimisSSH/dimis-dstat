# Dimis-Dstat
An OpenSource Stat Website source as in https://dvlopd.cf ( that was in https://dimis.dev )
This is a modified & translated version of dstat.ru (https://github.com/KirillChimbur/DSTAT-RU-L7)
I made it have 2 version (V1 and V2) that you can choose to have uam/protection or anything trough URI-FULL in cloudflare or any CDN you like and I also changed some if its design!


# Showcase: 
![main](https://cdn.discordapp.com/attachments/1016020585979056151/1030469749156614195/d_img1.PNG)
![atc](https://cdn.discordapp.com/attachments/1016020585979056151/1030469749504741376/d_img2.PNG)
Live: https://dvlopd.cf or https://dstat.cc/l7custom-3.php (Dstat.CC)

# Requirements
1. NodeJS
2. NPM
3. screen


# Installation:
```sh
apt install nodejs
apt install npm
apt install screen
git clone https://github.com/DimisSSH/dimis-dstat
cd dimis-dstat/src/dstat-v2 && npm i
```

# Running:

To run once use:
```sh
node dimis-dstat/src/dstat-v2/index.js
```

To automatic run use
```sh
screen -S dstat node dimis-dstat/src/dstat-v2/index.js
```

To stop automatic run use
```sh
pkill screen
```

# CF Rule Example (Just in case you want to use)
Paste in cf rule (change domain ofc)
```sh
(http.request.full_uri contains "https://dvlopd/cf/v1")
```
Then > Managed Challenge


## Developer


- Telegram: [@dvlopd](https://t.me/dvlopd)
- Github: [@DimisSSH](https://github.com/DimisSSH)
