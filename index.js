const tmi = require('tmi.js');

const options = {
    options: {
        debug: true,
    },
    connection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: 'bogscam_utilities',
        password: 'oauth:hxvumitwjcgq9ctzh93b9f9k25zq5r',
    },
    channels: ['bogscam'],
};

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
    client.action('bogscam', 'Hello, BogscamUtilities is online')
});

client.on('chat', (channel,user,message,self) => {
    if (message === '!help') {
        client.action('bogscam', 'Command List: !code, !discord, !skinrequest. Note: More commands will be added soon, tho let me know which commands you would like to see via Discord!');
    }
});

client.on('chat', (channel,user,message,self) => {
    if (message === '!code') {
        client.action('bogscam', 'Friend JimPlayer08 by adding the code B0GS at the friend adding bar!');
    }
});

client.on('chat', (channel,user,message,self) => {
    if (message === '!discord') {
        client.action('bogscam', 'Join my Discord Server by following this link: https://discord.gg/MG3Qd9XqfN!');
    }
});

client.on('chat', (channel,user,message,self) => {
    if (message === '!skinrequest') {
        client.action('bogscam', 'Use the commands !golfers, !hats, !ball, !trails, !cupfxs, !winsounds and !swingsounds to see all the items I have and suggest the ones you want with the command !skinswitch and the items you want me to use!');
    }
});

client.on('chat', (channel,user,message,self) => {
    if (message === '!golfers') {
        client.action('bogscam', 'Stickman, Sticklady, Bronze, Con, Stick, Bumbler, Golfield, Football, Sailor, Bunny, Silver, Cop, Dad, Doc, Golden, Brother, Demon, Shadow, Mountie, Mummy, Outline, Bubble, Plumber, Robin, Space Elf, Dragon, Wooden, Tux, Speedo, Android, Will, Zombie, Hercules, Matador, Ridinghood, Underpants, Gingerbread, Baseball, Bot, Caveman, Frosty, Mime, Ninja, Princess, Pirate, Tennis, Alien, Golem, Scareclown, Lion, Frank, Mrs. Frank, Bigfoot, ScubaGuy, Angel, Love Bear, Camp Killer, Santa, Mrs. Claus, Yeti, Monkey, Tanuki, Sniper, Elixir, Sticky Man, Grenadier, Cone, Miner, Shower, Bowling Pin, Matchsticks, Galaxy, Ghostly, Werewolf, Chainsaw, Laser, Spider, Repellent, Elf, Multitool, Pro, Pro, Shield, Anti-Grav, Birthday, Spaceman, Racer, Max Elixir, Cthicky, Flappy Bird, Piñata, Bathtime, Blitz Man, Mariachi, Mother, Metal Hero, Lifeguard, Team Canada, Liberty, Insect Hero, Area 51, Gold Tux, Shark');
    }
});

client.on('chat', (channel,user,message,self) => {
    if (message === '!hats') {
        client.action('bogscam', 'JimPlayer08 will wear it as soon as possible!');
    }
});

client.on('chat', (channel,user,message,self) => {
    if (message === '!balls') {
        client.action('bogscam', 'JimPlayer08 will wear it as soon as possible!');
    }
});

client.on('chat', (channel,user,message,self) => {
    if (message === '!trails') {
        client.action('bogscam', 'JimPlayer08 will wear it as soon as possible!');
    }
});

client.on('chat', (channel,user,message,self) => {
    if (message === '!cupfxs') {
        client.action('bogscam', 'JimPlayer08 will wear it as soon as possible!');
    }
});

client.on('chat', (channel,user,message,self) => {
    if (message === '!winsounds') {
        client.action('bogscam', 'JimPlayer08 will wear it as soon as possible!');
    }
});

client.on('chat', (channel,user,message,self) => {
    if (message === '!swingsounds') {
        client.action('bogscam', 'JimPlayer08 will wear it as soon as possible!');
    }
});

client.on('chat', (channel,user,message,self) => {
    if (message === '!skinswitch') {
        client.action('bogscam', 'JimPlayer08 will wear it as soon as possible!');
    }
});