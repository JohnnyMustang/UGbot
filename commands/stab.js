exports.run = (client, message, args) => {
    let stabee = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    if (stabee.length < 1) return message.reply('just stabbed themselves! :dagger::scream: Someone call the police!');
    message.reply(`just stabbed {$user} :dagger::scream:`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'stab',
    description: 'Not very nice of you to stab people!',
    usage: 'stab'
};