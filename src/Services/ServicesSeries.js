import Global from "@/Global";
import axios from "axios";

export default class ServicesSeries {
    getAllSeries() {
        return new Promise(function (resolve) {
            var request = "api/series";
            var url = Global.urlApiSeries + request;
            axios.get(url).then(res => {
                resolve(res.data);
            });
        })
    }

    findSerie(id) {
        return new Promise(function (resolve) {
            var request = "api/series/" + id;
            var url = Global.urlApiSeries + request;
            axios.get(url).then(res => {
                resolve(res.data);
            });
        })
    }

    findPersonajesSerie(id) {
        return new Promise(function (resolve) {
            var request = "api/series/personajesserie/" + id;
            var url = Global.urlApiSeries + request;
            axios.get(url).then(res => {
                resolve(res.data);
            });
        })
    }

    getAllPersonajes() {
        return new Promise(function (resolve) {
            var request = "api/personajes";
            var url = Global.urlApiSeries + request;
            axios.get(url).then(res => {
                resolve(res.data);
            });
        })
    }

    insertPersonaje(personaje) {
        return new Promise(function (resolve) {
            var request = "api/personajes";
            var url = Global.urlApiSeries + request;
            axios.post(url, personaje).then(res => {
                resolve(res);
            });
        })
    }

    updatePersonaje(idPersonaje, idSerie) {
        return new Promise(function (resolve) {
            var request = "api/personajes/" + idPersonaje + "/" + idSerie;
            var url = Global.urlApiSeries + request;
            axios.post(url).then(res => {
                resolve(res);
            });
        })
    }
}
