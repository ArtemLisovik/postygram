import { baseApi } from "api";

export interface Crypto {
    category: string;
    circulatingSupply: number;
    id: number;
    lastUpdated: string;
    maxSupply: number;
    name: string;
    rank: number;
    slug: string;
    symbol: string;
    tokens: [];
    totalSupply: number;
    type: string;
    values: {
        USD: {
            high24h: number;
            low24h: number;
            marketCap: number;
            percentChange3m: number;
            percentChange6m: number;
            percentChange7d: number;
            percentChange24h: number;
            percentChange30d: number;
            price: number;
            volume24h: number;
        }
        volume24hBase: number
    }
}

const calculatorApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCryptoRank: builder.query({
            query: () => ({
                url: "https://api.cryptorank.io/v1/currencies?api_key=4e2b799b3ab010c258493f8d93d5f761c4c14d1f15a0bbf659d315adfd7d&ids=1,3,16",
            }),
            keepUnusedDataFor: 30,
        }),
    }),
});

export const { useGetCryptoRankQuery } = calculatorApi;
