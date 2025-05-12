export const quizData: Record<string, {
  question: string
  options: string[]
  answer: string
}[]> = {
  Succinct: [
    {
          question: "What is the primary function of the Succinct Network?",
          options: ["Data storage", "Smart contract deployment", "Zero-knowledge proof generation", "Token exchange"],
          answer: "Zero-knowledge proof generation"
        },
        {
          question: "On which blockchain is the Succinct Network built?",
          options: ["Bitcoin", "Ethereum", "Polkadot", "Solana"],
          answer: "Ethereum"
        },
        {
          question: "What is the role of provers in the Succinct Network?",
          options: ["Submitting proof requests", "Generating zero-knowledge proofs", "Storing data", "Validating transactions"],
          answer: "Generating zero-knowledge proofs"
        },
        {
          question: "How does the Succinct Network ensure competitive pricing for proof generation?",
          options: ["Fixed pricing model", "Auction-based mechanism", "Subscription fees", "Donations"],
          answer: "Auction-based mechanism"
        },
        {
          question: "What is SP1 in the context of the Succinct Network?",
          options: ["A smart contract", "A zero-knowledge virtual machine", "A data storage protocol", "A consensus algorithm"],
          answer: "A zero-knowledge virtual machine"
        },
        {
          question: "Which programming language is primarily used with SP1?",
          options: ["Python", "Rust", "JavaScript", "Go"],
          answer: "Rust"
        },
        {
          question: "What ensures the trustless nature of the Succinct Network?",
          options: ["Centralized validators", "Smart contracts on Ethereum", "Manual verification", "Third-party audits"],
          answer: "Smart contracts on Ethereum"
        },
        {
          question: "What is the purpose of the data availability layer in the Succinct Network?",
          options: ["Storing user credentials", "Ensuring quick retrieval of proof data", "Managing tokens", "Hosting smart contracts"],
          answer: "Ensuring quick retrieval of proof data"
        },
        {
          question: "How does the Succinct Network handle failed proof submissions?",
          options: ["Ignores them", "Retries automatically", "Slashes prover's collateral", "Sends warnings"],
          answer: "Slashes prover's collateral"
        },
        {
          question: "What is a key benefit of the Succinct Network's architecture?",
          options: ["High transaction fees", "Centralized control", "Permissionless participation", "Limited scalability"],
          answer: "Permissionless participation"
        }
  ],
  SP1zkVM: [
        {
          question: "What is SP1 in Succinct?",
          options: ["A validator", "A consensus mechanism", "A zero-knowledge virtual machine", "An L1 smart contract"],
          answer: "A zero-knowledge virtual machine"
        },
        {
          question: "Which programming language is used to write programs for SP1?",
          options: ["Python", "Rust", "Solidity", "C++"],
          answer: "Rust"
        },
        {
          question: "What advantage does SP1 offer to developers?",
          options: ["Simplified token management", "Direct L2 integration", "Write once, prove anywhere", "Better NFT support"],
          answer: "Write once, prove anywhere"
        },
        {
          question: "SP1 is optimized for which type of proof system?",
          options: ["SNARKs", "STARKs", "ZK-SNARKs", "Bulletproofs"],
          answer: "STARKs"
        },
        {
          question: "What makes SP1 verifiable?",
          options: ["Use of AI", "Public review", "Cryptographic ZK proofs", "Manual checks"],
          answer: "Cryptographic ZK proofs"
        },
        {
          question: "Which layer does SP1 primarily interact with?",
          options: ["Layer 0", "Layer 1 (Ethereum)", "Application Layer", "Off-chain"],
          answer: "Layer 1 (Ethereum)"
        },
        {
          question: "Does SP1 require specialized hardware to run?",
          options: ["Yes", "No"],
          answer: "No"
        },
        {
          question: "How is data privacy maintained in SP1?",
          options: ["By hiding transaction metadata", "By using zk-proofs", "Through VPN integration", "With user passwords"],
          answer: "By using zk-proofs"
        },
        {
          question: "Which use case is ideal for SP1?",
          options: ["Token issuance", "NFT minting", "Verifiable computing", "DEX arbitrage"],
          answer: "Verifiable computing"
        },
        {
          question: "What is a key outcome of using SP1 in Succinct?",
          options: ["Lower gas for L2 rollups", "Trusted centralized proofs", "Off-chain trust computation", "Proof generation on-chain"],
          answer: "Off-chain trust computation"
        }
      ],
    prover: [
        {
          question: "What is the role of provers in the Succinct Network?",
          options: ["Storing NFTs", "Generating zero-knowledge proofs", "Writing smart contracts", "Hosting DAOs"],
          answer: "Generating zero-knowledge proofs"
        },
        {
          question: "What incentivizes provers to participate?",
          options: ["Governance access", "Proof fees", "NFT rewards", "Community points"],
          answer: "Proof fees"
        },
        {
          question: "What mechanism is used for selecting provers?",
          options: ["Random lottery", "Reputation system", "Auction", "Round-robin"],
          answer: "Auction"
        },
        {
          question: "Can anyone become a prover in the Succinct Network?",
          options: ["Yes", "No", "Only Ethereum devs", "Only selected validators"],
          answer: "Yes"
        },
        {
          question: "What happens if a prover fails to submit a valid proof?",
          options: ["Nothing", "They are rewarded", "Their collateral is slashed", "They are promoted"],
          answer: "Their collateral is slashed"
        },
        {
          question: "Where are prover proofs verified?",
          options: ["Locally", "On Succinct's blockchain", "On Ethereum", "On a private server"],
          answer: "On Ethereum"
        },
        {
          question: "How are provers paid?",
          options: ["Gas rebates", "Stablecoin transfers", "Via smart contracts", "Tokens from DAOs"],
          answer: "Via smart contracts"
        },
        {
          question: "What technology ensures proof authenticity?",
          options: ["Time stamps", "IPFS", "zk-STARKs", "Digital signatures"],
          answer: "zk-STARKs"
        },
        {
          question: "What type of infrastructure do provers use?",
          options: ["GPU clusters", "Data centers", "Decentralized compute", "Cloud-only servers"],
          answer: "Decentralized compute"
        },
        {
          question: "Is prover participation permissionless?",
          options: ["Yes", "No"],
          answer: "Yes"
        }
      ],
    RWAusecase: [
        {
          question: "Which of the following is NOT a use case of Succinct?",
          options: ["Verifiable gaming", "Secure voting systems", "Cross-chain DEXes", "Streaming services"],
          answer: "Streaming services"
        },
        {
          question: "How does Succinct support verifiable oracles?",
          options: ["By sending emails", "Using smart contracts and zk proofs", "Through API polling", "Via staking pools"],
          answer: "Using smart contracts and zk proofs"
        },
        {
          question: "How can gaming benefit from Succinct?",
          options: ["Faster rendering", "Proof of fairness", "Better graphics", "Cheaper downloads"],
          answer: "Proof of fairness"
        },
        {
          question: "In supply chains, Succinct can help by:",
          options: ["Reducing taxes", "Verifying product origins", "Speeding deliveries", "Creating product ads"],
          answer: "Verifying product origins"
        },
        {
          question: "Succinct enables cross-chain interoperability through:",
          options: ["Wrapped tokens", "Bridges + verifiable proofs", "DAOs", "Subnets"],
          answer: "Bridges + verifiable proofs"
        },
        {
          question: "Which sector benefits from Succinct’s ability to validate off-chain data?",
          options: ["Banking", "eCommerce", "Legal", "All of the above"],
          answer: "All of the above"
        },
        {
          question: "Which is a direct user benefit from vApps powered by Succinct?",
          options: ["Lower internet bills", "Trustless execution", "Ad-free experience", "Free crypto"],
          answer: "Trustless execution"
        },
        {
          question: "Which proof system allows Succinct to scale verification?",
          options: ["zk-SNARKs", "zk-STARKs", "Ring signatures", "Multisig"],
          answer: "zk-STARKs"
        },
        {
          question: "How does Succinct impact data availability?",
          options: ["Increases storage costs", "Ensures verifiability of data chunks", "Eliminates data storage", "Encrypts all content"],
          answer: "Ensures verifiability of data chunks"
        },
        {
          question: "Which community initiative supports vApp development on Succinct?",
          options: ["GitHub stars", "vApps Builders Telegram", "Reddit AMA", "X airdrops"],
          answer: "vApps Builders Telegram"
        }
      ],
      SP12FA: [
        {
          question: "What does SP1-2FA add to the SP1 zkVM?",
          options: ["A new programming language", "A second layer of security using TEEs", "Faster transaction speeds", "Integration with NFTs"],
          answer: "A second layer of security using TEEs"
        },
        {
          question: "What is the primary purpose of integrating TEEs with SP1?",
          options: ["To enable GPU acceleration", "To provide hardware-based attestation for proof generation", "To reduce electricity consumption", "To support mobile devices"],
          answer: "To provide hardware-based attestation for proof generation"
        },
        {
          question: "How does SP1-2FA enhance the trust model of zero-knowledge proofs?",
          options: ["By eliminating the need for cryptography", "By combining software proofs with hardware attestation", "By using cloud storage", "By relying solely on user passwords"],
          answer: "By combining software proofs with hardware attestation"
        },
        {
          question: "Which hardware component is essential for SP1-2FA's functionality?",
          options: ["Graphics Processing Unit (GPU)", "Trusted Execution Environment (TEE)", "Solid State Drive (SSD)", "Random Access Memory (RAM)"],
          answer: "Trusted Execution Environment (TEE)"
        },
        {
          question: "What benefit does SP1-2FA provide to developers?",
          options: ["Simplified user interfaces", "Enhanced security without significant code changes", "Automatic code optimization", "Built-in marketing tools"],
          answer: "Enhanced security without significant code changes"
        },
        {
          question: "Is SP1-2FA currently available to all developers?",
          options: ["Yes, it's publicly available", "No, it's in private beta", "Only for enterprise users", "Only for mobile applications"],
          answer: "No, it's in private beta"
        },
        {
          question: "What kind of applications can benefit most from SP1-2FA?",
          options: ["Simple web pages", "High-security applications requiring verifiable computation", "Basic calculators", "Static blogs"],
          answer: "High-security applications requiring verifiable computation"
        },
        {
          question: "How does SP1-2FA impact the performance of proof generation?",
          options: ["It significantly slows down the process", "It has minimal overhead with added security", "It doubles the processing time", "It eliminates the need for proofs"],
          answer: "It has minimal overhead with added security"
        },
        {
          question: "Can SP1-2FA be integrated into existing SP1 applications?",
          options: ["Yes, with minor modifications", "No, it requires a complete rewrite", "Only for new applications", "Only for applications written in Python"],
          answer: "Yes, with minor modifications"
        },
        {
          question: "What is a key advantage of combining SP1 with TEEs?",
          options: ["Reduced development costs", "Enhanced proof security through hardware and software synergy", "Increased advertising revenue", "Simplified user onboarding"],
          answer: "Enhanced proof security through hardware and software synergy"
        }
      ],
    SP1turbo: [
        {
          question: "What is the primary goal of SP1 Turbo?",
          options: ["Reduce GPU load", "Accelerate zkVM proving performance", "Make NFTs faster", "Improve UI design"],
          answer: "Accelerate zkVM proving performance"
        },
        {
          question: "Which hardware is leveraged in SP1 Turbo for speed gains?",
          options: ["CPU only", "ASICs", "GPU acceleration", "FPGA"],
          answer: "GPU acceleration"
        },
        {
          question: "What is the claimed performance boost using SP1 Turbo over traditional zkVMs?",
          options: ["5x", "10x", "30x", "100x"],
          answer: "30x"
        },
        {
          question: "What core component benefits most from SP1 Turbo’s optimization?",
          options: ["Storage capacity", "Circuit synthesis", "Proof generation", "Gas estimation"],
          answer: "Proof generation"
        },
        {
          question: "Is SP1 Turbo open-source?",
          options: ["Yes", "No", "Only for enterprises", "Only on testnet"],
          answer: "Yes"
        },
        {
          question: "What type of proofs does SP1 Turbo optimize for?",
          options: ["zk-SNARKs", "zk-STARKs", "MACs", "RSA proofs"],
          answer: "zk-STARKs"
        },
        {
          question: "Which programming language is central to SP1 and Turbo optimizations?",
          options: ["Go", "Solidity", "Rust", "Python"],
          answer: "Rust"
        },
        {
          question: "SP1 Turbo is most beneficial for applications that need:",
          options: ["Fast UI rendering", "Off-chain data storage", "Rapid verifiable computation", "Token swaps"],
          answer: "Rapid verifiable computation"
        },
        {
          question: "What makes SP1 Turbo suitable for L2 solutions?",
          options: ["Its compatibility with centralized APIs", "Its ability to run on browsers", "Its scalable and fast proving system", "Its built-in DEX features"],
          answer: "Its scalable and fast proving system"
        },
        {
          question: "Where can you access SP1 Turbo?",
          options: ["Only on Arbitrum", "As a closed-source binary", "From Succinct’s GitHub", "Only via CLI"],
          answer: "From Succinct’s GitHub"
        }
      ],
    OPSTACK: [
        {
          question: "What is OP Succinct designed for?",
          options: ["NFT minting", "Running Solana contracts", "Providing ZK proofs for Optimism", "Boosting EVM gas prices"],
          answer: "Providing ZK proofs for Optimism"
        },
        {
          question: "Which blockchain ecosystem does OP Succinct support?",
          options: ["Solana", "Cosmos", "Ethereum / Optimism", "Polygon"],
          answer: "Ethereum / Optimism"
        },
        {
          question: "What does OP Succinct replace in the Optimism stack?",
          options: ["Gas meter", "Proof-of-work", "Fault proofs with ZK proofs", "Transaction ordering"],
          answer: "Fault proofs with ZK proofs"
        },
        {
          question: "Why are ZK proofs desirable in L2 solutions like Optimism?",
          options: ["They look cool", "They are easier to program", "They reduce latency and ensure validity", "They help with airdrops"],
          answer: "They reduce latency and ensure validity"
        },
        {
          question: "OP Succinct aims to make Optimism:",
          options: ["More centralized", "Fully ZK-secure", "Faster at issuing NFTs", "Compatible with Bitcoin"],
          answer: "Fully ZK-secure"
        },
        {
          question: "Who maintains OP Succinct?",
          options: ["Optimism DAO", "Solana Labs", "Succinct", "ZK-Sync"],
          answer: "Succinct"
        },
        {
          question: "How are ZK proofs used in OP Succinct?",
          options: ["To prove L1 finality", "To validate state transitions on-chain", "To encrypt messages", "To mint OP tokens"],
          answer: "To validate state transitions on-chain"
        },
        {
          question: "Does OP Succinct replace the Optimism Bridge?",
          options: ["Yes", "No", "Only partially", "Only during testnet"],
          answer: "No"
        },
        {
          question: "What is a major outcome of integrating OP Succinct?",
          options: ["Eliminates gas fees", "Brings verifiable security to Optimism", "Increases token inflation", "Reduces NFT quality"],
          answer: "Brings verifiable security to Optimism"
        },
        {
          question: "What type of rollup architecture does OP Succinct support?",
          options: ["Validium", "Optimistic Rollups with ZK finality", "ZK-Rollups only", "Modular rollups"],
          answer: "Optimistic Rollups with ZK finality"
        }
      ],
    SP1SOL: [
        {
          question: "What does SP1-Solana integration enable?",
          options: ["Running Solana dApps in browsers", "Generating ZK proofs for Solana programs", "Solana NFTs on Ethereum", "Solana wallets with MetaMask"],
          answer: "Generating ZK proofs for Solana programs"
        },
        {
          question: "Why is Solana integration significant for SP1?",
          options: ["It adds LayerZero support", "It expands verifiability beyond Ethereum", "It improves Solana’s price", "It removes validators"],
          answer: "It expands verifiability beyond Ethereum"
        },
        {
          question: "What kind of programs does SP1 target on Solana?",
          options: ["Rust-based Solana programs", "JavaScript front-ends", "React apps", "SPL token bridges only"],
          answer: "Rust-based Solana programs"
        },
        {
          question: "How does SP1 provide proofs for Solana?",
          options: ["Via custom RPCs", "By interpreting Solana's transaction logs", "Through zkVM simulation of Solana execution", "With wrapped Ethereum contracts"],
          answer: "Through zkVM simulation of Solana execution"
        },
        {
          question: "Is SP1-Solana integration open to all developers?",
          options: ["Yes", "No", "Only for DAOs", "Only for airdrop projects"],
          answer: "Yes"
        },
        {
          question: "What is a practical benefit of Solana integration?",
          options: ["Fast NFT art generation", "Cross-chain verifiability", "Tokenless dApps", "Gasless execution"],
          answer: "Cross-chain verifiability"
        },
        {
          question: "What language is used in both SP1 and Solana?",
          options: ["Python", "Go", "Rust", "TypeScript"],
          answer: "Rust"
        },
        {
          question: "Which part of Solana does SP1 mimic to verify programs?",
          options: ["Validator logs", "Instruction sets and state transitions", "Gas costs", "Consensus algorithm"],
          answer: "Instruction sets and state transitions"
        },
        {
          question: "Why might DeFi developers care about SP1-Solana?",
          options: ["To reduce APR volatility", "For verifiable execution across chains", "To run more ads", "To win hackathons"],
          answer: "For verifiable execution across chains"
        },
        {
          question: "How can you start building with SP1 for Solana?",
          options: ["Via GitHub and SP1 docs", "With a Twitter account", "By using Binance", "Through DEX listings"],
          answer: "Via GitHub and SP1 docs"
        }
      ],
    IBCEureka: [
        {
          question: "What is the primary purpose of IBC Eureka?",
          options: ["To create a new cryptocurrency", "To enable interoperability between Cosmos and Ethereum", "To replace Ethereum's consensus mechanism", "To develop a new smart contract language"],
          answer: "To enable interoperability between Cosmos and Ethereum"
        },
        {
          question: "Which technology does IBC Eureka utilize to achieve trustless communication?",
          options: ["Proof-of-Work", "Zero-Knowledge Proofs (ZKPs)", "Delegated Proof-of-Stake", "Sharding"],
          answer: "Zero-Knowledge Proofs (ZKPs)"
        },
        {
          question: "What role does Succinct's SP1 play in IBC Eureka?",
          options: ["It acts as a new blockchain", "It serves as a general-purpose zkVM for proof generation", "It replaces Tendermint consensus", "It functions as a decentralized exchange"],
          answer: "It serves as a general-purpose zkVM for proof generation"
        },
        {
          question: "How does IBC Eureka improve upon traditional bridging methods?",
          options: ["By increasing transaction fees", "By introducing centralized validators", "By eliminating the need for wrapped tokens", "By reducing transaction speed"],
          answer: "By eliminating the need for wrapped tokens"
        },
        {
          question: "Which programming language is central to the implementation of IBC Eureka's light client?",
          options: ["Python", "Rust", "JavaScript", "Go"],
          answer: "Rust"
        },
        {
          question: "What is the function of the SP1ICS07Tendermint.sol contract in IBC Eureka?",
          options: ["To manage NFT minting", "To handle end-to-end logic for IBC transfers on Ethereum", "To facilitate staking rewards", "To execute smart contracts on Cosmos"],
          answer: "To handle end-to-end logic for IBC transfers on Ethereum"
        },
        {
          question: "How does IBC Eureka benefit protocols like Mitosis?",
          options: ["By providing centralized liquidity pools", "By enabling direct liquidity movement between Cosmos and Ethereum", "By increasing gas fees", "By limiting cross-chain interactions"],
          answer: "By enabling direct liquidity movement between Cosmos and Ethereum"
        },
        {
          question: "What cryptographic signature scheme's verification is optimized in IBC Eureka?",
          options: ["ECDSA", "RSA", "Ed25519", "DSA"],
          answer: "Ed25519"
        },
        {
          question: "Which component acts as an interchain router in IBC Eureka's architecture?",
          options: ["Ethereum Mainnet", "Cosmos Hub", "Polkadot Relay Chain", "Binance Smart Chain"],
          answer: "Cosmos Hub"
        },
        {
          question: "What is a significant advantage of using zero-knowledge proofs in IBC Eureka?",
          options: ["They increase transaction times", "They require more computational resources", "They provide trustless and efficient cross-chain verification", "They necessitate centralized intermediaries"],
          answer: "They provide trustless and efficient cross-chain verification"
        }
      ],
    vApps: [
        {
          question: "What does 'vApps' stand for in the context of blockchain technology?",
          options: ["Virtual Applications", "Verified Applications", "Verifiable Applications", "Variable Applications"],
          answer: "Verifiable Applications"
        },
        {
          question: "Which programming language is primarily used to develop vApps?",
          options: ["Solidity", "JavaScript", "Rust", "Python"],
          answer: "Rust"
        },
        {
          question: "What is the main advantage of using vApps over traditional dApps?",
          options: ["They require more complex infrastructure", "They eliminate the need for zero-knowledge proofs", "They offer web3-level security with a web2 developer experience", "They are limited to a single blockchain"],
          answer: "They offer web3-level security with a web2 developer experience"
        },
        {
          question: "How do vApps simplify the development process for developers?",
          options: ["By requiring knowledge of multiple programming languages", "By necessitating custom circuit design", "By allowing developers to focus solely on application logic", "By enforcing strict on-chain-only execution"],
          answer: "By allowing developers to focus solely on application logic"
        },
        {
          question: "Which component provides the verifiable computing layer for vApps?",
          options: ["Ethereum Virtual Machine (EVM)", "Succinct Prover Network", "Binance Smart Chain", "Polkadot Parachains"],
          answer: "Succinct Prover Network"
        },
        {
          question: "What performance improvements do vApps achieve with GPU acceleration?",
          options: ["Up to 2x throughput gains", "Up to 10x throughput gains", "Up to 30x throughput gains", "No significant improvement"],
          answer: "Up to 30x throughput gains"
        },
        {
          question: "How much can recursion compress proof sizes in vApps?",
          options: ["Up to 50x", "Up to 100x", "Up to 230x", "No compression"],
          answer: "Up to 230x"
        },
        {
          question: "What is the purpose of the vApp SDK?",
          options: ["To create new cryptocurrencies", "To manage blockchain consensus", "To provide a framework for building verifiable applications", "To design user interfaces"],
          answer: "To provide a framework for building verifiable applications"
        },
        {
          question: "Which company partnered with Succinct to introduce vApps?",
          options: ["LayerZero", "Chainlink", "Polygon", "Solana"],
          answer: "LayerZero"
        },
        {
          question: "What is a key benefit of vApps for Web2 developers?",
          options: ["They require deep blockchain knowledge", "They necessitate learning Solidity", "They allow integration of verifiability without extensive blockchain expertise", "They are limited to Ethereum"],
          answer: "They allow integration of verifiability without extensive blockchain expertise"
        }
      ],
}
