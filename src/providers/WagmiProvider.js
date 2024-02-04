"use client";

import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "wagmi",
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

export const WagmiProvider = ({ children }) => {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
};
