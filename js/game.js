var commands = {
    help: function (term, args) {
        if (args) {
            term.echo (help[args.topic]);
        } else {
            term.echo (help["all"]);
        }
    }
};

jQuery(function($, undefined) {
    $('#terminal').terminal(function(command, term) {
        if (command !== '') {
            var c = command.split(' ');
            if (c[0] in commands) {
                if (c[1]) {
                    commands[c[0]](term, JSON.deserialize(c[1]));
                } else {
                    commands[c[0]](term, null);
                }
            }
        } else {
           term.echo('');
        }
    }, {
        greetings: '1337 Version 1.0',
        name: 'terminal',
        height: $(window).height() - 20,
        prompt: '> '
    });
});
