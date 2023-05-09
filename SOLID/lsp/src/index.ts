import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import NubankCardRewards from "./NubankRewards";

const card = new CreditCard();

card.validate();
card.collectPayment();


const debit = new DebitCard();

debit.validate();
debit.collectPayment();

const rewards = new NubankCardRewards();
 
rewards.validate();
rewards.collectPayment();