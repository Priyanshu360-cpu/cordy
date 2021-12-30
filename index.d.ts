import { Client, Guild, GuildMember, IntegrationExpireBehaviors, Message, User } from 'discord.js';

export type starteropt = {
    status?:string;
    statusType?:string
} 
export declare function starter( 
    token?:string,
    options?: starteropt
): Promise<any> 
export type loopopt = {
    title?:string;
    description?:string;
    footer?:string;
    color?:string;
    thumbnail?:string;
} 
export declare function loop(
    message:Message,
    args?:string[],
    client:Client,
    options?: loopopt
): Promise<any> 
export type chatbotopt = {
    color:string;
}
export declare function chabtot(
    message:Message,
    client:Client, 
    args?:string[],
    options?: chatbotopt
): Promise<any> 
export type automemeopt = {
    timer:number
}
export declare function automeme(
    message:Message,
    client:Client,
    args?:string[],
    options?: automemeopt
): Promise<any> 
export declare function sticker(
    message:Message,
    client:Client,
    args?:string[]
)
export declare function spotify(
    message:Message,
    client:Client,
    args?:string[]
)
export declare function iphone(
    message:Message,
    client:Client,
    args?:string[]
)
export declare function findtheemoji(
    message:Message,
    client:Client,
    args?:string[]
)
export declare function audit(
    message:Message,
    client:Client,
    args?:string[]
)
export declare function afk(
    message:Message,
    client:Client,
    args?:string[]
)
export declare function advancedav(
    message:Message,
    client:Client,
    args?:string[]
)
export declare function snipe(
    message:Message,
    client:Client,
    args?:string[]
)
export declare function autoplay(
    message:Message
)
export type lavaopt = {
    host?:string;
    port?:number;
    password?:string;
    identifier?:string;
    retryAmount?:number;
    retryDelay?:number;
    secure?:boolean;
    spotifyid?:string;
    spotifysecret?:string
} 
export declare function lavalink(
    option:lavaopt,
    client?:Client
)
export declare function play(
    message:Message
)
export declare function stop(
    message:Message
)
export declare function eval(
    message:Message,
    args?:string[]
)