declare const _default: {
    SendToKibana: typeof SendToKibana;
};
export default _default;

declare type KeyVal = Record<string, any>;

export declare class SendToKibana {
    appId: string;
    url: string;
    settings: ST_SETTINGS;
    sendData: KeyVal;
    constructor(url: string | null | undefined, appId: string | null | undefined, settings: ST_SETTINGS);
    setCommon(data: KeyVal): void;
    send(msg: KeyVal): void;
}

declare type ST_SETTINGS = {
    muiltiLength?: number;
    intervalTime?: number;
};

export { }
