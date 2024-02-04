import * as React from "react";
import { usePublicClient } from "wagmi";
import { providers } from "ethers";

interface PublicClient {
  chain: any;
  transport: any;
}

export function publicClientToProvider(publicClient: PublicClient) {
  const { chain, transport } = publicClient;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  if (transport.type === "fallback")
    return new providers.FallbackProvider(
      transport.transports.map(
        ({ value }: { value: any }) =>
          new providers.JsonRpcProvider(value?.url, network)
      )
    );
  return new providers.JsonRpcProvider(transport.url, network);
}

interface EthersProviderProps {
  chainId?: any;
}

/** Hook to convert a viem Public Client to an ethers.js Provider. */
export function useEthersProvider({ chainId }: EthersProviderProps = {}) {
  const publicClient = usePublicClient({ chainId });
  return React.useMemo(
    () => publicClientToProvider(publicClient),
    [publicClient]
  );
}
