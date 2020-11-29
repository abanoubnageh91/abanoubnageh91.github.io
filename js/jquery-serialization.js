(function($) {
    $.fn.extend({
        toObject: () => {
            var result = {}
            this.serializeArray().map((obj) => {
                result[obj.name] = obj.value;
            })
            return result;
        },
        fromObject: (obj) => {

            this.find(':input').map((i, n) => {
                var name = $(n).attr('name');
                if (obj[name]) {
                    $(n).val(obj[name]);
                } else {
                    $(n).val('');
                }
            })
        }
    });
})(jQuery);