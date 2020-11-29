/*
<img src="https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif" 
alt="" 
style="border: 1px solid #ccc" width="200" />
*/

const img = {
    src: 'https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif',
    alt: ' ',
    style: {
        border: {
            width: '1px',
            style: 'solid',
            color: '#ccc'
        }
    },
    width: 200
}

const $image = $('<img>').appendTo('body');

let str = '';
   
for (var attr in img) {
    if(typeof(img[attr]) == 'object') {
         for(var field in img[attr]) {
            if(typeof(img[attr][field]) == 'object') {
                str += field +': ';
                for(var property in img[attr][field]) {
                    str += img[attr][field][property] + ' ';
                }
                $image.attr(attr, str);
            } else {
                $image.attr(attr, field +': ' + img[attr][field]);
            }            
            console.log(img[attr]);
        }
    } else {
        $image.attr(attr, img[attr]);
    }
}
