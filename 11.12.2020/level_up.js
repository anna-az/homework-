/*
Level Up

Используя дескрипторы свойств создайте объект для описания местности со свойствами latitude, longitude и title. 
Свойства latitude и longitude могут содержать только цифры, все, что будет попадать в эти поля, становится числом. 
Если при преобразовании к числу получается NaN, то в качестве значения записывается null. 
То же для поля title, только все данные будут преобразовываться к строке.

*/

const place = {
    latitude: 0,
    longitude: 0,
    title: ''
};


Object.defineProperties(place, {
    'latitude': {
        get() {
            return this._latitude;
        },
        set(value) {
            this._latitude = isNaN(value) ? null : Number(value);
    	}
    },
    'longitude': {
	    get() {
		    return this._longitude;
	    },
	    set(value) {
            this._longitude = isNaN(value) ? null : Number(value);
	    }    
    },
    'title': {
        get() {
        	return this._title;
    	},
    	set(value) {
            this._title = String(value);
    	}
    }
});

place.latitude = '8';
place.longitude = 'abc';
place.title = 456;
console.log(place.latitude);
console.log(place.longitude);
console.log(place.title);