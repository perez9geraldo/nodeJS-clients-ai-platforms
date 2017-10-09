/**
 * Copyright (c) 2017 Geraldo A. Perez
 */
'use strict'

module.exports = class FacebookBotConfig {
    /**
     * Getters and Setters
     */

    get apiaiAccessToken() {
        return this._apiaiAccessToken;
    }

    set apiaiAccessToken(value) {
        this._apiaiAccessToken = value;
    }

    get apiaiLang() {
        return this._apiaiLang;
    }

    set apiaiLang(value) {
        this._apiaiLang = value;
    }

    constructor(apiaiAccessToken, apiaiLang) {
        this._apiaiAccessToken = apiaiAccessToken;
        this._apiaiLang = apiaiLang;
    }
}