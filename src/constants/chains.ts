import { IChainData } from "../helpers/types";

export const SUPPORTED_CHAINS: IChainData[] = [
  {
    name: "Ethereum Mainnet",
    short_name: "eth",
    chain: "ETH",
    network: "mainnet",
    chain_id: 1,
    network_id: 1,
    rpc_url: "https://mainnet.infura.io/v3/%API_KEY%",
    native_currency: {
      symbol: "ETH",
      name: "Ether",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Ethereum Ropsten",
    short_name: "rop",
    chain: "ETH",
    network: "ropsten",
    chain_id: 3,
    network_id: 3,
    rpc_url: "https://ropsten.infura.io/v3/%API_KEY%",
    native_currency: {
      symbol: "ETH",
      name: "Ether",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Ethereum Rinkeby",
    short_name: "rin",
    chain: "ETH",
    network: "rinkeby",
    chain_id: 4,
    network_id: 4,
    rpc_url: "https://rinkeby.infura.io/v3/%API_KEY%",
    native_currency: {
      symbol: "ETH",
      name: "Ether",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Ethereum Görli",
    short_name: "gor",
    chain: "ETH",
    network: "goerli",
    chain_id: 5,
    network_id: 5,
    rpc_url: "https://goerli.infura.io/v3/%API_KEY%",
    native_currency: {
      symbol: "ETH",
      name: "Ether",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "RSK Mainnet",
    short_name: "rsk",
    chain: "RSK",
    network: "mainnet",
    chain_id: 30,
    network_id: 30,
    rpc_url: "https://public-node.rsk.co",
    native_currency: {
      symbol: "R-BTC",
      name: "Smart Bitcoin",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "RSK Testnet",
    short_name: "trsk",
    chain: "tRSK",
    network: "testnet",
    chain_id: 31,
    network_id: 31,
    rpc_url: "https://public-node.testnet.rsk.co",
    native_currency: {
      symbol: "tR-BTC",
      name: "tSmart Bitcoin",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Ethereum Kovan",
    short_name: "kov",
    chain: "ETH",
    network: "kovan",
    chain_id: 42,
    network_id: 42,
    rpc_url: "https://kovan.infura.io/v3/%API_KEY%",
    native_currency: {
      symbol: "ETH",
      name: "Ether",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Ethereum Classic Mainnet",
    short_name: "etc",
    chain: "ETC",
    network: "mainnet",
    chain_id: 61,
    network_id: 1,
    rpc_url: "https://ethereumclassic.network",
    native_currency: {
      symbol: "ETH",
      name: "Ether Classic",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "POA Network Sokol",
    short_name: "poa",
    chain: "POA",
    network: "sokol",
    chain_id: 77,
    network_id: 77,
    rpc_url: "https://sokol.poa.network",
    native_currency: {
      symbol: "POA",
      name: "POA",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "POA Network Core",
    short_name: "skl",
    chain: "POA",
    network: "core",
    chain_id: 99,
    network_id: 99,
    rpc_url: "https://core.poa.network",
    native_currency: {
      symbol: "POA",
      name: "POA",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "xDAI Chain",
    short_name: "xdai",
    chain: "POA",
    network: "dai",
    chain_id: 100,
    network_id: 100,
    rpc_url: "https://dai.poa.network",
    native_currency: {
      symbol: "xDAI",
      name: "xDAI",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Callisto Mainnet",
    short_name: "clo",
    chain: "callisto",
    network: "mainnet",
    chain_id: 820,
    network_id: 1,
    rpc_url: "https://clo-geth.0xinfra.com/",
    native_currency: {
      symbol: "CLO",
      name: "CLO",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "ARTIS sigma1",
    short_name: "artis-s1",
    chain: "ATS",
    network: "artis-s1",
    chain_id: 246529,
    network_id: 246529,
    rpc_url: "https://rpc.sigma1.artis.network",
    native_currency: {
      symbol: "ATS",
      name: "ATS",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "ARTIS tau1",
    short_name: "artis-t1",
    chain: "ATS",
    network: "artis-t1",
    chain_id: 246785,
    network_id: 246785,
    rpc_url: "https://rpc.tau1.artis.network",
    native_currency: {
      symbol: "ATS",
      name: "ATS",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Eraswap Mainnet Network",
    short_name: "ESN",
    chain: "ESN",
    network: "mainnet",
    chain_id: 5197,
    network_id: 5197,
    rpc_url: "https://rpc-mumbai.mainnet.eraswap.network",
    native_currency: {
      symbol: "ES",
      name: "eraswap",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Harmony One Mainnet ",
    short_name: "ONE",
    chain: "harmony",
    network: "mainnet",
    chain_id: 1666600000,
    network_id: 1666600000,
    rpc_url: "https://api.harmony.one",
    native_currency: {
      symbol: "ONE",
      name: "ONE",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Harmony One Testnet ",
    short_name: "ONE",
    chain: "harmony",
    network: "testnet",
    chain_id: 1666700000,
    network_id: 1666700000,
    rpc_url: "https://api.s0.b.hmny.io",
    native_currency: {
      symbol: "ONE",
      name: "ONE",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
];
