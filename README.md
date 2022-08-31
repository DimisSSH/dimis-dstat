# Dimis-Dstat
An OpenSource DD0S Stat Website source as in https://dstat.dimis.dev
This is a modified version of dstat.ru (https://github.com/KirillChimbur/DSTAT-RU-L7)
I made it have 2 version (V1 and V2) that you can choose to have uam/protection or sth trough URI-FULL in cloudflare or any CDN


# Showcase: 
![main](https://cdn.discordapp.com/attachments/1012085212823437334/1014508050461233203/main.PNG)
![atc](https://cdn.discordapp.com/attachments/1012085212823437334/1014508093150867477/atc.PNG)
Live: https://dstat.dimis.dev

# Requirements
1. NodeJS
2. NPM
3. screen


# Installation:
```sh
cd dstat-v2 && npm i
```

# Running:

To run once use:
```sh
node index.js
```

To run while idle use
```sh
screen node index.js
```

# CF Rule Example (Just in case you want to use)
Paste in cf rule
```sh
(http.request.full_uri contains "https://dstat.dimis.dev/v1")
```
Then > JS Challenge


## Developer

👤 **DimisSSH**

- Website: https://dimis.dev
- Github: [@DimisSSH](https://github.com/DimisSSH)
