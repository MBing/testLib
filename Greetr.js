;(function(global, $) {
    var Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    };

    var supportedLangs = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola',
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión',
    };

    Greetr.prototype = {
        fullName: function fullName () {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function validate () {
            if (supportedLangs.indexOf(this.language) === -1) {
                //throw "Invalid language";
            }
        },

        greeting: function greeting () {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function formalGreeting () {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function greet (formal, selfUsage) {
            var msg;

            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (selfUsage) {
                return msg;
            }

            return this;
        },

        log: function log () {
            if (console) {
                console.log( logMessages[this.language] + ': ' + this.fullName() );
            }

            return this;
        },

        setLang: function setLang (lang) {
            this.language = lang;

            this.validate();

            return this;
        },

        greetHTMLJQuery: function jquery (selector, formal) {
            var msg;

            if (!$) {
                console.error('No jQuery was found.');
                return;
            }

            msg = this.greet(formal, true);
            $(selector).html(msg);

            return this;
        }
    };

    Greetr.init = function (firstName, lastName, language) {
        var self = this;

        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        self.validate();
    };

    Greetr.init.prototype = Greetr.prototype;

    return global.Greatr = global.G$ = Greetr;

})(window, jQuery);
