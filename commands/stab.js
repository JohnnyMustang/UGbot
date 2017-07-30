exports.run = (client, message, args) => {
    if (!args) {
    return message.reply('just stabbed themselves! :dagger::scream: Someone call the police!');
    message.reply(`just stabbed {$args} :dagger::scream:`);
}};

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