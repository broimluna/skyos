//Terminal
// ref: https://stackoverflow.com/q/67322922/387194
var __EVAL = (s) => eval(`void (__EVAL = ${__EVAL}); ${s}`);
jQuery(function($, undefined) {
    $('#jsterminal').terminal(function(command) {
        if (command !== '') {
            try {
                var result = __EVAL(command);
                if (result !== undefined) {
                    this.echo(new String(result));
                }
            } catch(e) {
                this.error(new String(e));
            }
        } else {
        }
		
    }, {

        greetings: developer_name + "'s " + product_name + " [Version " + kernel_version + "." + build_number + "]\nRun any Javascript command...",
        name: 'Terminal',
        height: 200,
        prompt: '> '
    });
});
