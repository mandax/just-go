import Config from "./config";
import { Item } from "../types";

export const GetItems = async (): Promise<any> => 
	await fetch(`${Config.API}/items`);