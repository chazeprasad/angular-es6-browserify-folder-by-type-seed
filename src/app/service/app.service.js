class AppService {

    constructor ($http, $base64, $q) {
        'ngInject';

        this.$http          = $http;
        this.$base64        = $base64;
        this.$q             = $q;

    }

    get (url){
        var d = this.$q.defer();
        this.$http.get(url).success((data) => {
            d.resolve(data);
        }).error((err, status) => {
            d.reject(err, status);
        });
        return d.promise ;
    };
    post(url, payload){
        var d = this.$q.defer();
        this.$http.post(url, payload).success((data) => {
            d.resolve(data);
        }).error((err, status) => {
            d.reject(err, status);
        });
        return d.promise ;
    };
    put(url, payload){
        var d = this.$q.defer();
        this.$http.put(url, payload).success((data) => {
            d.resolve(data);
        }).error((err, status) => {
            d.reject(err, status);
        });
        return d.promise ;
    };
    destroy(url){
        var d = this.$q.defer();
        this.$http.delete(url).success((data) => {
            d.resolve(data);
        }).error((err, status) => {
            d.reject(err, status);
        });
        return d.promise ;
    };

    getAuthHeader (data) {
        var authdata = this.$base64.encode(data);
        var header = {headers: {'Authorization': 'Basic ' + authdata}};
        return header
    }

    setCredentials (data) {
        var authdata = this.$base64.encode(data);
        this.$http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
    };

    clearCredentials() {
        this.$http.defaults.headers.common.Authorization = 'Basic ';
    };


}

export default AppService
