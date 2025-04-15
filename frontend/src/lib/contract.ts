import { ethers } from "ethers";
import abi from "./abi";

export const getContract = () => {
  if (!window.ethereum) throw new Error("MetaMask required");
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const address = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;
  return new ethers.Contract(address, abi, signer);
};
