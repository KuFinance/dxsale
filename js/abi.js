var basicABI = [{
    constant: !0,
    inputs: [],
    name: "name",
    outputs: [{
        name: "",
        type: "string"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "symbol",
    outputs: [{
        name: "",
        type: "string"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}];
var a = "0x289e38287f91A63D7BE9AdAf797589A2df55572c"
    , i = "0x4B170Bb56032Ca068fF0Ee03943a9B9bc1554C9A"
    , s = "0xe839d166F01c256c0DA9247DC8ceBC128D9c7d9F"
    , p = "0xbaCEbAd5993a19c7188Db1cC8D0F748C9Af1689A"
    , u = "0x9372223605f7D0ac727e662CCB8F94bFa036100D"
    , y = "0xbd9f4452C59175DDf3A9F6D9d1F4ACde0CD4663A"
    , r = "0x2370d852871418a1A968c834a40e73C9c6f4B667"
    , d = "0xcd5fD649Da9E0563BbbdD555ab6006Dc9a596b49"
    , o = ""
    , l = "0x77D054b8e61A141CE51fc9Cc3E9E2C3B79F57809"
    , m = ""
    , c = "0xE3156716bEc777E93edd00253063A72b3076C65E"
    , A = [{
    inputs: [{
        internalType: "address",
        name: "_presaleDappAddr",
        type: "address"
    }, {
        internalType: "address",
        name: "_filterAddress",
        type: "address"
    }],
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }],
    name: "OwnershipRenounced",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    inputs: [{
        internalType: "address[]",
        name: "_whitelistAddress",
        type: "address[]"
    }],
    name: "AddToWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_newFilterAddress",
        type: "address"
    }],
    name: "ChangeFilterAddr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_newteamAccAddress",
        type: "address"
    }],
    name: "ChangeTeamAcc",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_newVoterAddress",
        type: "address"
    }],
    name: "ChangeVoterAddr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "string[10]",
        name: "_tokenInfo",
        type: "string[10]"
    }, {
        internalType: "address",
        name: "tokenAddr",
        type: "address"
    }, {
        internalType: "uint256[4]",
        name: "start_end_gov_time",
        type: "uint256[4]"
    }, {
        internalType: "uint256[6]",
        name: "soft_hard_cap_rate_min_max_eth_GOV",
        type: "uint256[6]"
    }, {
        internalType: "uint256[3]",
        name: "uniswap_info_arr",
        type: "uint256[3]"
    }],
    name: "CreatePresaleDep",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [],
    name: "FilterAddress",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "PlatformAirdropAddress",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "presaleToRefundFromOwnerAddress",
        type: "address"
    }],
    name: "PlatformUnlockLP",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address[]",
        name: "_whitelistAddress",
        type: "address[]"
    }],
    name: "RemoveFromWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "UNISWAP_ADDRESS",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "callFinalizeDG",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_newFee",
        type: "uint256"
    }],
    name: "changePresaleFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newRouter",
        type: "address"
    }, {
        internalType: "address",
        name: "newFactory",
        type: "address"
    }],
    name: "changeRouterAndFactoryAddr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_newFee",
        type: "uint256"
    }],
    name: "changeWhitelistFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "presaleToRefundFromOwnerAddress",
        type: "address"
    }],
    name: "checkTotalEthraisedOfPresale",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "creationEnabled",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "deltaStartEndTime",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "disableWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "enableWhitelist",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [],
    name: "factoryAddress",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "finalizeBlocked",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "getNumberOfPresaleOwners",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "minUniPercentage",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "presaleToRefundFromOwnerAddress",
        type: "address"
    }],
    name: "platformCallsFinalizeRefund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "presaleAddrToOwnerAddr",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "presaleDappAddr",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "presaleFees",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "presaleOwnerToIndex",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "presaleOwners",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "presales",
    outputs: [{
        internalType: "bool",
        name: "exists",
        type: "bool"
    }, {
        internalType: "uint256",
        name: "createdOn",
        type: "uint256"
    }, {
        internalType: "address",
        name: "presaleInfoAddr",
        type: "address"
    }, {
        internalType: "address",
        name: "tokenAddress",
        type: "address"
    }, {
        internalType: "address",
        name: "presaleAddress",
        type: "address"
    }, {
        internalType: "address",
        name: "governor",
        type: "address"
    }, {
        internalType: "bool",
        name: "active",
        type: "bool"
    }, {
        internalType: "uint256",
        name: "startTime",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "endTime",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "govPercentage",
        type: "uint256"
    }, {
        internalType: "address",
        name: "uniswapDep",
        type: "address"
    }, {
        internalType: "uint256",
        name: "uniswapPercentage",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "uniswapRate",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "lp_locked",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "team_acc",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "tokenAddrToIndex",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "tokenAddrToOwnerAddr",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "tokenDappAddr",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "tokenFee",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "totalRaisedOnPlatform",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "totalRefundedFromPlatform",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_newPresaleDapp",
        type: "address"
    }],
    name: "updatePresaleDapp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "voter",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "presaleToRefundFromOwnerAddress",
        type: "address"
    }],
    name: "voterCallsFinalizeRefund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "whitelistFees",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}]
    , b = [{
    inputs: [{
        internalType: "address",
        name: "_tokenAddress",
        type: "address"
    }, {
        internalType: "address",
        name: "_creatorAdress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_locktime",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }],
    name: "OwnershipRenounced",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    stateMutability: "payable",
    type: "fallback"
}, {
    inputs: [{
        internalType: "uint256",
        name: "amountTokenDesired",
        type: "uint256"
    }],
    name: "AddLiquidity",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [],
    name: "Approve",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "UNISWAP_ADDRESS",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "factoryAddress",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "token",
        type: "address"
    }],
    name: "getpair",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "refundUniLP",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "token",
        type: "address"
    }],
    name: "uniBalance",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}]
    , T = [{
    constant: !0,
    inputs: [],
    name: "allPairsLength",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "address",
        name: "tokenA",
        type: "address"
    }, {
        internalType: "address",
        name: "tokenB",
        type: "address"
    }],
    name: "createPair",
    outputs: [{
        internalType: "address",
        name: "pair",
        type: "address"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "feeTo",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "feeToSetter",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [{
        internalType: "address",
        name: "tokenA",
        type: "address"
    }, {
        internalType: "address",
        name: "tokenB",
        type: "address"
    }],
    name: "getPair",
    outputs: [{
        internalType: "address",
        name: "pair",
        type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "setFeeTo",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "setFeeToSetter",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}]
    , f = "0xA5dA59f5126Ee48FFD44e184C489Ef8B2e7CD7F9"
    , w = "0xa13baee00fc692b93a81f218eda3c1836d5cc2c0"
    , g = "0x2370d852871418a1A968c834a40e73C9c6f4B667"
    , M = "0x627dB4B6EF48c1Da7BA372f8caEf39631D256633"
    , v = "0x19f4c41c82D287fb0251D07a88F028158896F097"
    , C = "0x93244A4C8333b049bb26001E3415554aE7257dD6"
    , E = "0x6FCC2e4Efb4E05DdfC2154AbE209356d5A687666"
    , B = "0xdf17aC098Fa81373625e102061844C02ECCEc645"
    , Q = ""
    , x = "0x694927471e2778396493a9fF25d0337b01EaE99A"
    , I = ""
    , k = "0xc149C1cae2fB1c310c3311dD7313E16b0EFC1B0a"
    , presaleSearchABI = [{
    inputs: [{
        internalType: "address",
        name: "_tokenOwner",
        type: "address"
    }, {
        internalType: "address",
        name: "_presaleAddress",
        type: "address"
    }, {
        internalType: "address",
        name: "_tokenAddress",
        type: "address"
    }],
    name: "addFailure",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_tokenOwner",
        type: "address"
    }, {
        internalType: "address",
        name: "_presaleAddress",
        type: "address"
    }, {
        internalType: "address",
        name: "_tokenAddress",
        type: "address"
    }],
    name: "addLive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_tokenOwner",
        type: "address"
    }, {
        internalType: "address",
        name: "_presaleAddress",
        type: "address"
    }, {
        internalType: "address",
        name: "_tokenAddress",
        type: "address"
    }],
    name: "addSuccess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_mewMainDapp",
        type: "address"
    }],
    name: "changeMainDappAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }],
    name: "OwnershipRenounced",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "failedOwnerList",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "failedPresaleList",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "failedViaOwnerAddr",
    outputs: [{
        internalType: "bool",
        name: "finalized",
        type: "bool"
    }, {
        internalType: "address",
        name: "presaleOwner",
        type: "address"
    }, {
        internalType: "address",
        name: "presaleAddress",
        type: "address"
    }, {
        internalType: "address",
        name: "tokenAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "index",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "finalizeTimeStamp",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "failedViaPresaleAddr",
    outputs: [{
        internalType: "bool",
        name: "finalized",
        type: "bool"
    }, {
        internalType: "address",
        name: "presaleOwner",
        type: "address"
    }, {
        internalType: "address",
        name: "presaleAddress",
        type: "address"
    }, {
        internalType: "address",
        name: "tokenAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "index",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "finalizeTimeStamp",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "failedViaTokenAddr",
    outputs: [{
        internalType: "bool",
        name: "finalized",
        type: "bool"
    }, {
        internalType: "address",
        name: "presaleOwner",
        type: "address"
    }, {
        internalType: "address",
        name: "presaleAddress",
        type: "address"
    }, {
        internalType: "address",
        name: "tokenAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "index",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "finalizeTimeStamp",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "failListIndex",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "getTokenOwnerFailure",
    outputs: [{
        internalType: "address[]",
        name: "",
        type: "address[]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "getTokenOwnerLive",
    outputs: [{
        internalType: "address[]",
        name: "",
        type: "address[]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "getTokenOwnerSuccess",
    outputs: [{
        internalType: "address[]",
        name: "",
        type: "address[]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "liveListIndex",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "liveOwnerList",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "livePresaleList",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "liveTokenList",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "liveViaOwnerAddr",
    outputs: [{
        internalType: "bool",
        name: "created",
        type: "bool"
    }, {
        internalType: "address",
        name: "presaleOwner",
        type: "address"
    }, {
        internalType: "address",
        name: "presaleAddress",
        type: "address"
    }, {
        internalType: "address",
        name: "tokenAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "index",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "createdTimestamp",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "liveViaPresaleAddr",
    outputs: [{
        internalType: "bool",
        name: "created",
        type: "bool"
    }, {
        internalType: "address",
        name: "presaleOwner",
        type: "address"
    }, {
        internalType: "address",
        name: "presaleAddress",
        type: "address"
    }, {
        internalType: "address",
        name: "tokenAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "index",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "createdTimestamp",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "liveViaTokenAddr",
    outputs: [{
        internalType: "bool",
        name: "created",
        type: "bool"
    }, {
        internalType: "address",
        name: "presaleOwner",
        type: "address"
    }, {
        internalType: "address",
        name: "presaleAddress",
        type: "address"
    }, {
        internalType: "address",
        name: "tokenAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "index",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "createdTimestamp",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "mainDapp",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "successfulViaOwnerAddr",
    outputs: [{
        internalType: "bool",
        name: "finalized",
        type: "bool"
    }, {
        internalType: "address",
        name: "presaleOwner",
        type: "address"
    }, {
        internalType: "address",
        name: "presaleAddress",
        type: "address"
    }, {
        internalType: "address",
        name: "tokenAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "index",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "finalizeTimeStamp",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "successfulViaPresaleAddr",
    outputs: [{
        internalType: "bool",
        name: "finalized",
        type: "bool"
    }, {
        internalType: "address",
        name: "presaleOwner",
        type: "address"
    }, {
        internalType: "address",
        name: "presaleAddress",
        type: "address"
    }, {
        internalType: "address",
        name: "tokenAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "index",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "finalizeTimeStamp",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "successfulViaTokenAddr",
    outputs: [{
        internalType: "bool",
        name: "finalized",
        type: "bool"
    }, {
        internalType: "address",
        name: "presaleOwner",
        type: "address"
    }, {
        internalType: "address",
        name: "presaleAddress",
        type: "address"
    }, {
        internalType: "address",
        name: "tokenAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "index",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "finalizeTimeStamp",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "successListIndex",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "successOwnerList",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "successPresaleList",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "tokenOwnerFailure",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "tokenOwnerIndexFailure",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "tokenOwnerIndexLive",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "tokenOwnerIndexSuccess",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "tokenOwnerLive",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "tokenOwnerSuccess",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}]
    , presaleABI = [{
    constant: !0,
    inputs: [],
    name: "uniswapDapAddress",
    outputs: [{
        name: "",
        type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "hasClosed",
    outputs: [{
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "initialized",
    outputs: [{
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [{
        name: "",
        type: "address"
    }],
    name: "contributors",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "presaleEndTime",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "CheckTotalEthRaised",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [{
        name: "",
        type: "address"
    }],
    name: "contributorsClaim",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "rate",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [{
        name: "",
        type: "address"
    }],
    name: "anytimeRefunded",
    outputs: [{
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "cap",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [{
        name: "",
        type: "address"
    }],
    name: "contributorsRefundAnytime",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "goal",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "weiRaised",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [{
        name: "contributor_addr",
        type: "address"
    }],
    name: "checkContributorValidity",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [],
    name: "claimTokens",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "closingTime",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "presaleGoalReachedTime",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [],
    name: "ReleaseFundsToPlatform",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "capReached",
    outputs: [{
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "whitelistEnabled",
    outputs: [{
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "wallet",
    outputs: [{
        name: "",
        type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "governorContract",
    outputs: [{
        name: "",
        type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "test_tag",
    outputs: [{
        name: "",
        type: "string"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "finalizeValid",
    outputs: [{
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "goalReached",
    outputs: [{
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        name: "WhitelistAddress",
        type: "address"
    }],
    name: "removeFromWhitelist",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "isFinalized",
    outputs: [{
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "owner",
    outputs: [{
        name: "",
        type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        name: "uniswapDep",
        type: "address"
    }, {
        name: "tokenFee",
        type: "uint256"
    }],
    name: "mintForUniswap",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [{
        name: "",
        type: "address"
    }],
    name: "whitelist",
    outputs: [{
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "presaleStartTime",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        name: "tokenFee",
        type: "uint256"
    }, {
        name: "_platAddrs",
        type: "address"
    }],
    name: "mintForPlatform",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "finalizeTimeout",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [],
    name: "claimRefund",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "openingTime",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "Preaslefinalized",
    outputs: [{
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "minEthContribution",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "CheckHardCap",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        name: "__finalizeInfo",
        type: "address[3]"
    }, {
        name: "validFinalize",
        type: "bool"
    }],
    name: "finalize",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !1,
    inputs: [],
    name: "enableWhitelist",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !1,
    inputs: [],
    name: "disableWhitelist",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "maxEthContribution",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "checkRate",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        name: "WhitelistAddress",
        type: "address"
    }],
    name: "addToWhitelist",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "CheckSoftCap",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [{
        name: "",
        type: "address"
    }],
    name: "contributorsTracker",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        name: "_beneficiary",
        type: "address"
    }],
    name: "buyTokens",
    outputs: [],
    payable: !0,
    stateMutability: "payable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "hasEnded",
    outputs: [{
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "presaleCreator",
    outputs: [{
        name: "",
        type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        name: "_newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        name: "tokenAdrs",
        type: "address"
    }],
    name: "seeDecimals",
    outputs: [{
        name: "",
        type: "uint8"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "vault",
    outputs: [{
        name: "",
        type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "token",
    outputs: [{
        name: "",
        type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        name: "token",
        type: "address"
    }, {
        name: "_rate",
        type: "uint256"
    }, {
        name: "start_end_time",
        type: "uint256[2]"
    }, {
        name: "targetUserWallet",
        type: "address"
    }, {
        name: "soft_hard_cap",
        type: "uint256[2]"
    }, {
        name: "_min_max_eth",
        type: "uint256[2]"
    }, {
        name: "_govUniPercentage",
        type: "uint256[2]"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    payable: !0,
    stateMutability: "payable",
    type: "fallback"
}, {
    anonymous: !1,
    inputs: [],
    name: "Initialized",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        name: "startTime",
        type: "uint256"
    }, {
        indexed: !1,
        name: "endTime",
        type: "uint256"
    }, {
        indexed: !1,
        name: "oldStartTime",
        type: "uint256"
    }, {
        indexed: !1,
        name: "oldEndTime",
        type: "uint256"
    }],
    name: "TimesChanged",
    type: "event"
}, {
    anonymous: !1,
    inputs: [],
    name: "Finalized",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        name: "previousOwner",
        type: "address"
    }],
    name: "OwnershipRenounced",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        name: "purchaser",
        type: "address"
    }, {
        indexed: !0,
        name: "beneficiary",
        type: "address"
    }, {
        indexed: !1,
        name: "value",
        type: "uint256"
    }, {
        indexed: !1,
        name: "amount",
        type: "uint256"
    }],
    name: "TokenPurchase",
    type: "event"
}]
    , O = [{
    constant: !1,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        name: "__Creator",
        type: "address"
    }, {
        name: "__uniswapDep",
        type: "address"
    }],
    name: "close",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !1,
    inputs: [],
    name: "enableRefunds",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "owner",
    outputs: [{
        name: "",
        type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [{
        name: "",
        type: "address"
    }],
    name: "deposited",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        name: "_newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        name: "investor",
        type: "address"
    }],
    name: "deposit",
    outputs: [],
    payable: !0,
    stateMutability: "payable",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        name: "investor",
        type: "address"
    }],
    name: "refund",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        name: "_wallet",
        type: "address"
    }, {
        name: "_FEES",
        type: "uint256"
    }, {
        name: "_uniswapPercentage",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [],
    name: "Closed",
    type: "event"
}, {
    anonymous: !1,
    inputs: [],
    name: "RefundsEnabled",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        name: "beneficiary",
        type: "address"
    }, {
        indexed: !1,
        name: "weiAmount",
        type: "uint256"
    }],
    name: "Refunded",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        name: "previousOwner",
        type: "address"
    }],
    name: "OwnershipRenounced",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}]
    , h = [{
    constant: !0,
    inputs: [{
        name: "_addr",
        type: "address"
    }, {
        name: "_index",
        type: "uint256"
    }],
    name: "getFreezing",
    outputs: [{
        name: "_release",
        type: "uint64"
    }, {
        name: "_balance",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "transferrable",
    outputs: [{
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "mintingFinished",
    outputs: [{
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "name",
    outputs: [{
        name: "",
        type: "string"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        name: "_spender",
        type: "address"
    }, {
        name: "_value",
        type: "uint256"
    }],
    name: "approve",
    outputs: [{
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        name: "_to",
        type: "address"
    }, {
        name: "_amount",
        type: "uint256"
    }, {
        name: "_until",
        type: "uint64"
    }],
    name: "mintAndFreeze",
    outputs: [{
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "totalSupply",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        name: "_from",
        type: "address"
    }, {
        name: "_to",
        type: "address"
    }, {
        name: "_value",
        type: "uint256"
    }],
    name: "transferFrom",
    outputs: [{
        name: "_success",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "decimals",
    outputs: [{
        name: "",
        type: "uint8"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        name: "_to",
        type: "address"
    }, {
        name: "_amount",
        type: "uint256"
    }],
    name: "mint",
    outputs: [{
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !1,
    inputs: [],
    name: "releaseAll",
    outputs: [{
        name: "tokens",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        name: "_spender",
        type: "address"
    }, {
        name: "_subtractedValue",
        type: "uint256"
    }],
    name: "decreaseApproval",
    outputs: [{
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !1,
    inputs: [],
    name: "releaseOnce",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [{
        name: "_owner",
        type: "address"
    }],
    name: "balanceOf",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "__name",
    outputs: [{
        name: "",
        type: "string"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [],
    name: "finishMinting",
    outputs: [{
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "__symbol",
    outputs: [{
        name: "",
        type: "string"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "owner",
    outputs: [{
        name: "",
        type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "__decimals",
    outputs: [{
        name: "_decimals",
        type: "uint8"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "symbol",
    outputs: [{
        name: "",
        type: "string"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        name: "_to",
        type: "address"
    }, {
        name: "_value",
        type: "uint256"
    }],
    name: "transfer",
    outputs: [{
        name: "_success",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !1,
    inputs: [],
    name: "stop_mint",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !1,
    inputs: [],
    name: "totalSupplyCheck",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [{
        name: "_addr",
        type: "address"
    }],
    name: "freezingCount",
    outputs: [{
        name: "count",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        name: "_spender",
        type: "address"
    }, {
        name: "_addedValue",
        type: "uint256"
    }],
    name: "increaseApproval",
    outputs: [{
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [{
        name: "_owner",
        type: "address"
    }, {
        name: "_spender",
        type: "address"
    }],
    name: "allowance",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [],
    name: "__AllowTokenTransfer",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        name: "_newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !1,
    inputs: [],
    name: "__basicTokenTransferable",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        name: "_name",
        type: "string"
    }, {
        name: "_symbol",
        type: "string"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        name: "to",
        type: "address"
    }, {
        indexed: !1,
        name: "amount",
        type: "uint256"
    }],
    name: "Mint",
    type: "event"
}, {
    anonymous: !1,
    inputs: [],
    name: "MintFinished",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        name: "to",
        type: "address"
    }, {
        indexed: !1,
        name: "release",
        type: "uint64"
    }, {
        indexed: !1,
        name: "amount",
        type: "uint256"
    }],
    name: "Freezed",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        name: "owner",
        type: "address"
    }, {
        indexed: !1,
        name: "amount",
        type: "uint256"
    }],
    name: "Released",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        name: "previousOwner",
        type: "address"
    }],
    name: "OwnershipRenounced",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        name: "spender",
        type: "address"
    }, {
        indexed: !1,
        name: "value",
        type: "uint256"
    }],
    name: "Approval",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        name: "from",
        type: "address"
    }, {
        indexed: !0,
        name: "to",
        type: "address"
    }, {
        indexed: !1,
        name: "value",
        type: "uint256"
    }],
    name: "Transfer",
    type: "event"
}]
    , R = [{
    inputs: [{
        internalType: "string[10]",
        name: "_tokenInfoInput",
        type: "string[10]"
    }, {
        internalType: "address",
        name: "_presaleCreator",
        type: "address"
    }],
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }],
    name: "OwnershipRenounced",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    inputs: [{
        internalType: "string[8]",
        name: "ChangeData",
        type: "string[8]"
    }],
    name: "ChangeInfoDG",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "string",
        name: "newDescription",
        type: "string"
    }],
    name: "changeDescription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "string",
        name: "newGit",
        type: "string"
    }],
    name: "changeGit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "string",
        name: "newLogo",
        type: "string"
    }],
    name: "changeLogo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "string",
        name: "newReddit",
        type: "string"
    }],
    name: "changeReddit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "string",
        name: "newTelegram",
        type: "string"
    }],
    name: "changeTelegram",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "string",
        name: "newTwitter",
        type: "string"
    }],
    name: "changeTwitter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "string",
        name: "newUpdate",
        type: "string"
    }],
    name: "changeUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "string",
        name: "newWebsite",
        type: "string"
    }],
    name: "changeWebsite",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "infoManager",
    outputs: [{
        internalType: "bool",
        name: "exists",
        type: "bool"
    }, {
        internalType: "string",
        name: "name",
        type: "string"
    }, {
        internalType: "string",
        name: "symbol",
        type: "string"
    }, {
        internalType: "string",
        name: "logo",
        type: "string"
    }, {
        internalType: "string",
        name: "website",
        type: "string"
    }, {
        internalType: "string",
        name: "github",
        type: "string"
    }, {
        internalType: "string",
        name: "twitter",
        type: "string"
    }, {
        internalType: "string",
        name: "reddit",
        type: "string"
    }, {
        internalType: "string",
        name: "telegram",
        type: "string"
    }, {
        internalType: "string",
        name: "description",
        type: "string"
    }, {
        internalType: "string",
        name: "update",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}]
    , P = "0xA5C62354c2a3ebE018cEf78Cb8Ec886C721386F6"
    , Y = [{
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }],
    name: "OwnershipRenounced",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    inputs: [],
    name: "CheckBlockTimestamp",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "addresses",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "counts",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "strings",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "index",
        type: "uint256"
    }, {
        internalType: "address",
        name: "newData",
        type: "address"
    }],
    name: "updateAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "index",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "newData",
        type: "uint256"
    }],
    name: "updateCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "index",
        type: "uint256"
    }, {
        internalType: "string",
        name: "newData",
        type: "string"
    }],
    name: "updateString",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}]
    , G = [{
    inputs: [{
        internalType: "address",
        name: "_feeToSetter",
        type: "address"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "token0",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "token1",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "pair",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "PairCreated",
    type: "event"
}, {
    constant: !0,
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "allPairs",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "allPairsLength",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "address",
        name: "tokenA",
        type: "address"
    }, {
        internalType: "address",
        name: "tokenB",
        type: "address"
    }],
    name: "createPair",
    outputs: [{
        internalType: "address",
        name: "pair",
        type: "address"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "feeTo",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "feeToSetter",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }, {
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "getPair",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "address",
        name: "_feeTo",
        type: "address"
    }],
    name: "setFeeTo",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "address",
        name: "_feeToSetter",
        type: "address"
    }],
    name: "setFeeToSetter",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}]
    , L = "0xE98bc67b6439aC253faa668bE1E8C5D3AF0Fe2a2"
    , U = "0xb965BAE863F7Edc462c5064D41fE077493BBfE95"
    , J = "0x4B170Bb56032Ca068fF0Ee03943a9B9bc1554C9A"
    , z = "0x603dd7A2316069d2777E19Fdd529C885121D2B80"
    , N = "0xaB6A25CC60F5f6793c72Bbf957a2E501F1B43B7c"
    , S = "0x63d20bf9aa36b8be580b19b024dd8b62a9f11f3b"
    , H = "0x3052b62d39624f341D44b195D2E4b865f074B656"
    , q = "0xc149C1cae2fB1c310c3311dD7313E16b0EFC1B0a"
    , V = "0x37BC23FB5c83d73F208A77ecEC7EB818cEA60172"
    , X = ""
    , W = ""
    , j = "0x5D764143Aa6b98D7ad915C9b86b9Dfec778768f6"
    , K = "0xcC8f0B47Cf0E2d5428eDaE93d968eA927De626a2"
    , Z = "0xA3AbeAfA40CA4456c3fde2bAd46d592515dAE47b"
    , _ = "0xA3AbeAfA40CA4456c3fde2bAd46d592515dAE47b"
    , $ = "0x77D054b8e61A141CE51fc9Cc3E9E2C3B79F57809"
    , ee = "0xFAfceA08F86a1864F5D7D49fd2A2B3186C9489c0"
    , te = "0xfcc9c5df19626413e0c2803f81762d5007d31cab"
    , ne = "0x603dd7A2316069d2777E19Fdd529C885121D2B80"
    , ae = "0x9b7e14288FA224ba2e2E67b59e0F8F0420D46f70"
    , ie = "0xCeB9e1b5373be1622d44E2Da949c935f05A5be25"
    , se = ""
    , pe = ""
    , ue = "0xB3C0Bc5D284c9f01a0d4c4eab8546D4D124612cD"
    , ye = ""
    , re = ""
    , de = ""
    , oe = ""
    , le = ""
    , me = ""
    , ce = ""
    , Ae = ""
    , be = ""
    , Te = ""
    , fe = [{
    inputs: [{
        internalType: "string",
        name: "_tokenName",
        type: "string"
    }, {
        internalType: "string",
        name: "_tokenSymbol",
        type: "string"
    }, {
        internalType: "uint8",
        name: "_decimal",
        type: "uint8"
    }, {
        internalType: "uint256",
        name: "_tokenAmount",
        type: "uint256"
    }],
    name: "CreateStandardToken",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [],
    name: "disableFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "enableFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "time",
        type: "uint256"
    }],
    name: "lock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "unlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_newFees",
        type: "uint256"
    }],
    name: "updateFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_newAddress",
        type: "address"
    }],
    name: "updateFeesAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "BlockTimestamp",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "feesAddress",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "feesEnabled",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "geUnlockTime",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "individualTokenCreationCount",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "standardTokenCreationFees",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }, {
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "tokenStorage",
    outputs: [{
        internalType: "bool",
        name: "exists",
        type: "bool"
    }, {
        internalType: "uint256",
        name: "createdOn",
        type: "uint256"
    }, {
        internalType: "string",
        name: "name",
        type: "string"
    }, {
        internalType: "string",
        name: "symbol",
        type: "string"
    }, {
        internalType: "uint256",
        name: "supply",
        type: "uint256"
    }, {
        internalType: "address",
        name: "tokenAddress",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "tokenToOwner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "verifiedDxMint",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}]
    , we = [{
    inputs: [{
        internalType: "string",
        name: "_tokenName",
        type: "string"
    }, {
        internalType: "string",
        name: "_tokenSymbol",
        type: "string"
    }, {
        internalType: "uint8",
        name: "_decimal",
        type: "uint8"
    }, {
        internalType: "uint256",
        name: "_tokenAmount",
        type: "uint256"
    }, {
        internalType: "uint8",
        name: "creatorTxFees",
        type: "uint8"
    }, {
        internalType: "uint8",
        name: "creatorLiqFees",
        type: "uint8"
    }],
    name: "CreateCustomToken",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [],
    name: "getAllTokens",
    outputs: [{
        internalType: "address[]",
        name: "",
        type: "address[]"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "time",
        type: "uint256"
    }],
    name: "lock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "taxPercentage",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "LiqPercentage",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "minMxTxPercentage",
        type: "uint256"
    }],
    name: "tokenParamterUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "unlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "newfees",
        type: "uint256"
    }],
    name: "updateFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newWalletAddress",
        type: "address"
    }],
    name: "updateFeeWalletAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "string",
        name: "_newLogo",
        type: "string"
    }, {
        internalType: "uint256",
        name: "_tokenNumber",
        type: "uint256"
    }],
    name: "updateLogo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "addressToLogo",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "BlockTimestamp",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "creationFees",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "feesAddress",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "geUnlockTime",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "individualTokenCreationCount",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "maxLiqFee",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "maxTaxFee",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "minMxTxPercentage",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "numberOfTokensCreated",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "tokenMap",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }, {
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "tokenStorage",
    outputs: [{
        internalType: "bool",
        name: "exists",
        type: "bool"
    }, {
        internalType: "uint256",
        name: "createdOn",
        type: "uint256"
    }, {
        internalType: "string",
        name: "name",
        type: "string"
    }, {
        internalType: "string",
        name: "symbol",
        type: "string"
    }, {
        internalType: "uint256",
        name: "supply",
        type: "uint256"
    }, {
        internalType: "address",
        name: "tokenAddress",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "tokenToOwner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "verifiedDxMint",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}]
    , ge = [{
    inputs: [{
        internalType: "address",
        name: "tokenOwner",
        type: "address"
    }, {
        internalType: "string",
        name: "name",
        type: "string"
    }, {
        internalType: "string",
        name: "symbol",
        type: "string"
    }, {
        internalType: "uint8",
        name: "decimal",
        type: "uint8"
    }, {
        internalType: "uint256",
        name: "amountOfTokenWei",
        type: "uint256"
    }, {
        internalType: "uint8",
        name: "setTaxFee",
        type: "uint8"
    }, {
        internalType: "uint8",
        name: "setLiqFee",
        type: "uint8"
    }, {
        internalType: "uint256",
        name: "_maxTaxFee",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_maxLiqFee",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_minMxTxPer",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "value",
        type: "uint256"
    }],
    name: "Approval",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "minTokensBeforeSwap",
        type: "uint256"
    }],
    name: "MinTokensBeforeSwapUpdated",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "tokensSwapped",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "ethReceived",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "tokensIntoLiqudity",
        type: "uint256"
    }],
    name: "SwapAndLiquify",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "bool",
        name: "enabled",
        type: "bool"
    }],
    name: "SwapAndLiquifyEnabledUpdated",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "value",
        type: "uint256"
    }],
    name: "Transfer",
    type: "event"
}, {
    inputs: [],
    name: "_liquidityFee",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "_maxTxAmount",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "_name",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "_symbol",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "_tTotal",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "_taxFee",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        internalType: "address",
        name: "spender",
        type: "address"
    }],
    name: "allowance",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "approve",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "balanceOf",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "decimals",
    outputs: [{
        internalType: "uint8",
        name: "",
        type: "uint8"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
    }],
    name: "decreaseAllowance",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tAmount",
        type: "uint256"
    }],
    name: "deliver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "disableFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "enableFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "excludeFromFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "geUnlockTime",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "includeInFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
    }],
    name: "increaseAllowance",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "isExcludedFromFee",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "isExcludedFromReward",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "time",
        type: "uint256"
    }],
    name: "lock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "maxLiqFee",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "maxTaxFee",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "minMxTxPercentage",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "mintedByDxsale",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "name",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "numTokensSellToAddToLiquidity",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "prevLiqFee",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "prevTaxFee",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tAmount",
        type: "uint256"
    }, {
        internalType: "bool",
        name: "deductTransferFee",
        type: "bool"
    }],
    name: "reflectionFromToken",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "router",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "liquidityFee",
        type: "uint256"
    }],
    name: "setLiquidityFeePercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "maxTxPercent",
        type: "uint256"
    }],
    name: "setMaxTxPercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "bool",
        name: "_enabled",
        type: "bool"
    }],
    name: "setSwapAndLiquifyEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "taxFee",
        type: "uint256"
    }],
    name: "setTaxFeePercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "swapAndLiquifyEnabled",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "symbol",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "rAmount",
        type: "uint256"
    }],
    name: "tokenFromReflection",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "totalFees",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "totalSupply",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "transfer",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "sender",
        type: "address"
    }, {
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "transferFrom",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "uniswapV2Pair",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "uniswapV2Router",
    outputs: [{
        internalType: "contract IUniswapV2Router02",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "unlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    stateMutability: "payable",
    type: "receive"
}]
    , Me = "0x06e466CD126957DaCA459AcCEe9Fc627C4b416f4"
    , ve = "0x1Ba00C14F9E8D1113028a14507F1394Dc9310fbD"
    , Ce = "0x6FCC2e4Efb4E05DdfC2154AbE209356d5A687666"
    , Ee = "0x8655E5c4D701186D16765d1CDcef6D5287E4679a"
    , Be = "0x9c47FF97c56A9bC36Ce2173412252a2B9dD51B15"
    , Qe = "0xc1E3f48e23D899A326C31df6A2850457F50710F8"
    , xe = "0x832CcF861059Cb352515E89Cc54F1b13C6620D37"
    , Ie = "0x69275e94cC431e380EebCbda6FB8e19f931cD359"
    , ke = ""
    , De = "0xB3C0Bc5D284c9f01a0d4c4eab8546D4D124612cD"
    , Fe = ""
    , Oe = "0x1C8aB27b538b5e43c151460cBc6D271cB9EeE4aF"
    , he = [{
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }],
    name: "OwnershipRenounced",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "_lockerOwner",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "_lpAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "_tokenAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "_lockDate",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "_unlockDate",
        type: "uint256"
    }],
    name: "onLock",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "_lockerOwner",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "_lpAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "_tokenAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "_unlockDate",
        type: "uint256"
    }],
    name: "onUnlock",
    type: "event"
}, {
    inputs: [],
    name: "CheckBlockTimestamp",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }, {
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "DXLOCKERLP",
    outputs: [{
        internalType: "bool",
        name: "exists",
        type: "bool"
    }, {
        internalType: "bool",
        name: "locked",
        type: "bool"
    }, {
        internalType: "string",
        name: "logo",
        type: "string"
    }, {
        internalType: "uint256",
        name: "lockedAmount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "lockedTime",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "startTime",
        type: "uint256"
    }, {
        internalType: "address",
        name: "lpAddress",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "LockerRecord",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "UserLockerCount",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_newFees",
        type: "uint256"
    }],
    name: "changeFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "userLockerNumber",
        type: "uint256"
    }, {
        internalType: "string",
        name: "_newLogo",
        type: "string"
    }],
    name: "changeLogo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_lpAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_locktime",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_tokenAmount",
        type: "uint256"
    }, {
        internalType: "string",
        name: "_logo",
        type: "string"
    }],
    name: "createLocker",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_newLockTime",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "userLockerNumber",
        type: "uint256"
    }],
    name: "increaseLockTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "lockFees",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "lockerNumberOpen",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "token",
        type: "address"
    }],
    name: "tokenBalance",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "userLockerNumber",
        type: "uint256"
    }],
    name: "unlockToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}]
    , Re = [{
    inputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "value",
        type: "uint256"
    }],
    name: "Approval",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "sender",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount0",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount1",
        type: "uint256"
    }, {
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
    }],
    name: "Burn",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "sender",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount0",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount1",
        type: "uint256"
    }],
    name: "Mint",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "sender",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount0In",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount1In",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256"
    }, {
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
    }],
    name: "Swap",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint112",
        name: "reserve0",
        type: "uint112"
    }, {
        indexed: !1,
        internalType: "uint112",
        name: "reserve1",
        type: "uint112"
    }],
    name: "Sync",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "value",
        type: "uint256"
    }],
    name: "Transfer",
    type: "event"
}, {
    constant: !0,
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "MINIMUM_LIQUIDITY",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }, {
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "allowance",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        internalType: "uint256",
        name: "value",
        type: "uint256"
    }],
    name: "approve",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "balanceOf",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "address",
        name: "to",
        type: "address"
    }],
    name: "burn",
    outputs: [{
        internalType: "uint256",
        name: "amount0",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amount1",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "decimals",
    outputs: [{
        internalType: "uint8",
        name: "",
        type: "uint8"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "factory",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "getReserves",
    outputs: [{
        internalType: "uint112",
        name: "_reserve0",
        type: "uint112"
    }, {
        internalType: "uint112",
        name: "_reserve1",
        type: "uint112"
    }, {
        internalType: "uint32",
        name: "_blockTimestampLast",
        type: "uint32"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "address",
        name: "_token0",
        type: "address"
    }, {
        internalType: "address",
        name: "_token1",
        type: "address"
    }],
    name: "initialize",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "kLast",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "address",
        name: "to",
        type: "address"
    }],
    name: "mint",
    outputs: [{
        internalType: "uint256",
        name: "liquidity",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "name",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "nonces",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        internalType: "uint256",
        name: "value",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
    }, {
        internalType: "uint8",
        name: "v",
        type: "uint8"
    }, {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
    }, {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
    }],
    name: "permit",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "price0CumulativeLast",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "price1CumulativeLast",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "address",
        name: "to",
        type: "address"
    }],
    name: "skim",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "swap",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "symbol",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [],
    name: "sync",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "token0",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "token1",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "totalSupply",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "value",
        type: "uint256"
    }],
    name: "transfer",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "value",
        type: "uint256"
    }],
    name: "transferFrom",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}]
    , Pe = "0x162B5028B63f87eeA892A0f8877F590c01fF39c5"
    , Ye = "0x916a8C33B784f6399Ce8b7aff59d4AAD29386B8E"
    , Ge = "0x2D045410f002A95EFcEE67759A92518fA3FcE677"
    , Le = "0x2D045410f002A95EFcEE67759A92518fA3FcE677"
    , Ue = "0xdf17aC098Fa81373625e102061844C02ECCEc645"
    , Je = "0x1C8aB27b538b5e43c151460cBc6D271cB9EeE4aF"
    , ze = "0x63d20Bf9Aa36b8bE580b19B024dD8b62a9f11F3b"
    , Ne = "0xadC5caC1E3CD46Fe8d5b98DB4Ea6eE241a19dCEE"
    , Se = ""
    , He = "0xadC5caC1E3CD46Fe8d5b98DB4Ea6eE241a19dCEE"
    , qe = ""
    , Ve = "0x3052b62d39624f341D44b195D2E4b865f074B656"
    , Xe = [{
    inputs: [{
        internalType: "uint256",
        name: "_newFees",
        type: "uint256"
    }],
    name: "changeFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_userLockerNumber",
        type: "uint256"
    }, {
        internalType: "string",
        name: "_newLogo",
        type: "string"
    }],
    name: "changeLogo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_tokenAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_locktime",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_tokenAmount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "vest_percentage",
        type: "uint256"
    }, {
        internalType: "string",
        name: "_logo",
        type: "string"
    }],
    name: "createLocker",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }],
    name: "OwnershipRenounced",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "_lockerOwner",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "_tokenAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "_tokenAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "_lockDate",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "_unlockDate",
        type: "uint256"
    }],
    name: "onLock",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "_lockerOwner",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "_tokenAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "_tokenAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "_unlockDate",
        type: "uint256"
    }],
    name: "onUnlock",
    type: "event"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "userLockerNumber",
        type: "uint256"
    }],
    name: "unlockToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "CheckBlockTimestamp",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }, {
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "DXLOCKER",
    outputs: [{
        internalType: "bool",
        name: "exists",
        type: "bool"
    }, {
        internalType: "bool",
        name: "locked",
        type: "bool"
    }, {
        internalType: "string",
        name: "logo",
        type: "string"
    }, {
        internalType: "uint256",
        name: "lockedAmount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "lockedTime",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "vestPercentage",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "startTime",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "calcStartTime",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "totalPayouts",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "payoutsLeft",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "vestingPeriod",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "eachPayout",
        type: "uint256"
    }, {
        internalType: "address",
        name: "tokenAddress",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "lockerNumberOpen",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "LockerRecord",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "lockFees",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "token",
        type: "address"
    }],
    name: "tokenBalance",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "UserLockerCount",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}]
    , We = [{
    inputs: [{
        internalType: "address",
        name: "_whitelistAddr",
        type: "address"
    }, {
        internalType: "string",
        name: "_name",
        type: "string"
    }],
    name: "addToWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_newVoterTime",
        type: "uint256"
    }],
    name: "changeVoterFinalizeTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_newMinTime",
        type: "uint256"
    }],
    name: "changeVoterMinTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "disableOwnerCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "disableVoterCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "disableWhitelistCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "enableOwnerCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "enableVoterCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "enableWhitelistCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "ownerCallsFinalizeRefundMainDapp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "addrMain",
        type: "address"
    }],
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }],
    name: "OwnershipRenounced",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    inputs: [{
        internalType: "address",
        name: "_whitelistAddr",
        type: "address"
    }],
    name: "removeFromWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_newMaindapp",
        type: "address"
    }],
    name: "updateMaindappAddr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "addrPre",
        type: "address"
    }],
    name: "voterCallsFinalizeRefundMainDapp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "addrPre",
        type: "address"
    }],
    name: "voterCallsFinalizeRefundMainDappHardCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "addrPre",
        type: "address"
    }],
    name: "voterCallsFinalizeRefundMainDappSoftCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "addrPre",
        type: "address"
    }],
    name: "voterFinalizeEnable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "addrPre",
        type: "address"
    }],
    name: "whitelistCallsFinalizeRefundMainDapp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "callerIndex",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "callerToBool",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "callerToIndex",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "callerToOwnerAddr",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "callerToPresaleAddr",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "CheckBlockTimestamp",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "checkEndTime",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "finalizeCallByOwnerTimestamp",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "finalizeCallByUserTimestamp",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "finalizeCallByWhitelistTimestamp",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "finalized",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "addrPre",
        type: "address"
    }],
    name: "getVoterFinalizeEnableFlag",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "indexToCaller",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "indexToOwner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "indexToOwnerAddr",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "indexToPresaleAddr",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "mainDappAddr",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "minimumTime",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "ownerAddrToCaller",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "ownerIndex",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "ownerToBool",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "ownerToIndex",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "presaleAddrToCaller",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "templateCrowdSaleAddr",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "voterEnableFlagTime",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "voterFinalizeEnableFlag",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "voterFinalizeTime",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "votingEnabled",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "votingOnlyOwnerEnabled",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "votingWhitelistEnabled",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "whitelist",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    name: "whitelistNameToAddr",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "whitelistToName",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}]
