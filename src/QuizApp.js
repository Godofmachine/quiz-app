import React, { useState } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { ChevronRight, ChevronLeft, Check, X } from 'lucide-react';

const questions = [
    {
      question: "Which legislation governs the sale of goods in Nigeria?",
      options: [
        "Sale of Goods Act 1979",
        "Sale of Goods Act 1893",
        "Consumer Protection Act 2019",
        "Commercial Transactions Act 1900"
      ],
      correctAnswer: 1
    },
    {
      question: "What is a contract of sale of goods defined as?",
      options: [
        "An agreement to deliver goods for future payment",
        "A contract where the seller transfers or agrees to transfer property in goods to the buyer for a money consideration",
        "A barter system",
        "An exchange of services"
      ],
      correctAnswer: 1
    },
    {
      question: "What must be present in addition to the ordinary elements of a contract for a sale of goods?",
      options: [
        "Goods and services",
        "Goods and money consideration",
        "Agreement and goods",
        "Possession and transfer"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the difference between a sale and an agreement to sell?",
      options: [
        "A sale transfers ownership immediately; an agreement to sell transfers ownership in the future",
        "A sale involves services, an agreement to sell involves goods",
        "A sale is a formal contract, an agreement to sell is informal",
        "A sale requires money, an agreement to sell does not"
      ],
      correctAnswer: 0
    },
    {
        question: "When is a contract of sale classified as conditional?",
        options: [
          "When the goods are delivered immediately",
          "When the goods are paid for in installments",
          "When the transfer of ownership is subject to the fulfillment of conditions",
          "When the buyer can return the goods anytime"
        ],
        correctAnswer: 2
      },
    {
      question: "In a contract for the sale of goods yet to be manufactured, the contract is classified as?",
      options: [
        "A sale",
        "A contract to produce",
        "An agreement to sell",
        "A goods procurement contract"
      ],
      correctAnswer: 2
    },
    {
      question: "The Sale of Goods Act 1893 is a statute of general application in which of the following?",
      options: [
        "Nigeria",
        "United Kingdom",
        "United States",
        "South Africa"
      ],
      correctAnswer: 0
    },
    {
      question: "Which of the following must be present in a valid contract of sale?",
      options: [
        "Transfer of property",
        "Exchange of services",
        "Ownership of property by the buyer",
        "Monetary gift"
      ],
      correctAnswer: 0
    },
    {
      question: "Which term refers to the legal transfer of ownership in a sale of goods?",
      options: [
        "Title transfer",
        "Delivery",
        "Property passing",
        "Ownership exchange"
      ],
      correctAnswer: 0
    },
    {
      question: "Which is NOT a necessary element in a contract of sale of goods?",
      options: [
        "Offer",
        "Acceptance",
        "Consideration",
        "Guarantee"
      ],
      correctAnswer: 3
    },
    {
      question: "Which of the following best describes an absolute contract?",
      options: [
        "A contract without future conditions",
        "A contract with conditions to be fulfilled",
        "A conditional sale",
        "A contract that requires legal representation"
      ],
      correctAnswer: 0
    },
    {
        question: "Who must have the capacity to enter into a contract for the sale of goods?",
        options: [
          "Only the seller",
          "Only the buyer",
          "Both parties",
          "The legal representative"
        ],
        correctAnswer: 2
      },
      {
        question: "What is the consequence of selling necessaries to a minor under the Sale of Goods Act?",
        options: [
          "The minor must return the goods",
          "The minor must pay a reasonable price",
          "The contract is void",
          "The minor is exempt from payment"
        ],
        correctAnswer: 1
      },
      {
        question: "What is required for a valid sale of goods contract?",
        options: [
          "Written agreement only",
          "Oral agreement only",
          "Either written or oral agreement",
          "Government registration"
        ],
        correctAnswer: 2
      },
      {
        question: "According to the Sale of Goods Act, which of the following statements is true?",
        options: [
          "A present sale of future goods operates as an immediate transfer of ownership.",
          "A contract for the sale of specific goods that have perished without the seller's knowledge at the time of the contract is void.",
          "An agreement to sell specific goods remains valid even if the goods perish without fault before the risk passes to the buyer.",
          "A contract for the sale of future goods is automatically void if the goods perish before delivery."
        ],
        correctAnswer: 1
      },
      {
        question: "The proviso to Section 2 of the Sale of Goods Act applies to which individuals?",
        options: [
          "Minors and corporations",
          "Infants, and insane persons",
          "Married men and women",
          "All of the above"
        ],
        correctAnswer: 1
      },
      {
        question: "Which element is NOT part of forming a contract of sale?",
        options: [
          "Offer",
          "Acceptance",
          "Guarantee",
          "Consideration"
        ],
        correctAnswer: 2
      },
      {
        question: "What type of price agreement is essential for a contract of sale?",
        options: [
          "The price must be fixed",
          "The price must be negotiable",
          "The price must be monetary",
          "The price can be goods or services"
        ],
        correctAnswer: 2
      },
      {
        question: "How can a sale of goods contract be made according to the Sale of Goods Act?",
        options: [
          "Only in writing",
          "Orally, in writing, or by conduct",
          "Only orally",
          "Only through legal proceedings"
        ],
        correctAnswer: 1
      },
      {
        question: "What is the importance of a note or memorandum in a contract for the sale of goods?",
        options: [
          "It is required for all contracts",
          "It is necessary for contracts of goods above a certain value",
          "It serves as a backup for oral contracts",
          "It must be signed by both parties"
        ],
        correctAnswer: 1
      },
      {
        question: "According to the Sale of Goods Act, what happens if the price in a contract of sale is to be fixed by a third party who fails to do so?",
        options: [
          "The buyer must pay the price initially offered by the seller.",
          "The agreement is avoided, but the buyer must pay a reasonable price if the goods have been delivered and appropriated.",
          "The seller can unilaterally set the price.",
          "The contract is automatically void and no payment is required."
        ],
        correctAnswer: 1
      },
      {
        question: "What is the seller’s primary duty in a sale of goods contract?",
        options: [
          "Accept the payment",
          "Ensure the goods are safe",
          "Deliver the goods",
          "Negotiate the terms"
        ],
        correctAnswer: 2
      },
      {
        question: "When must the seller deliver the goods to avoid a breach of contract?",
        options: [
          "Within 30 days",
          "By the date agreed in the contract",
          "Anytime before payment is made",
          "Before the end of the contract term"
        ],
        correctAnswer: 1
      },
      {
        question: "What does the term 'C.I.F' stand for in a sale of goods contract?",
        options: [
          "Cost, Insurance, and Freight",
          "Cost, Information, and Freight",
          "Customer Information Fee",
          "Cost, Insurance, and Forwarding"
        ],
        correctAnswer: 0
      },
      {
        question: "In a C.I.F contract, when does the risk pass to the buyer?",
        options: [
          "Upon signing the contract",
          "When the goods are loaded on the ship",
          "Upon delivery of the goods",
          "When the buyer inspects the goods"
        ],
        correctAnswer: 1
      },
      {
        question: "What does 'F.O.B' mean in a sale of goods contract?",
        options: [
          "Freight on Board",
          "Free on Board",
          "Forward on Board",
          "Fixed on Board"
        ],
        correctAnswer: 1
      },
      {
        question: "In an F.O.B contract, when does the seller’s responsibility for the goods end?",
        options: [
          "When the goods are delivered to the buyer's warehouse.",
          "When the goods are loaded onto the vessel at the port of shipment.",
          "When the goods pass customs at the destination port.",
          "When the buyer receives the goods."
        ],
        correctAnswer: 1
      },
      {
        question: "What is the buyer’s duty after receiving the goods?",
        options: [
          "Return the goods",
          "Make the payment",
          "Inspect the goods",
          "Sell the goods"
        ],
        correctAnswer: 1
      },
      {
        question: "According to the Sale of Goods Act, are time-of-payment stipulations considered essential in a contract of sale?",
        options: [
          "Yes, always.",
          "No, unless the contract specifies otherwise.",
          "Only if the buyer insists.",
          "No, they are never considered essential."
        ],
        correctAnswer: 1
      },
      {
        question: "Which of the following is NOT a remedy available to the seller?",
        options: [
          "Rescission of the contract",
          "Stoppage in transit",
          "Right to sue for damages",
          "Right to a refund"
        ],
        correctAnswer: 3
      },
      {
        question: "Under what condition can the buyer reject the goods?",
        options: [
          "If the goods are delivered late",
          "If the goods are exactly as described",
          "If the goods are damaged",
          "If the buyer changes their mind"
        ],
        correctAnswer: 2
      },
      {
        question: "What action can a seller take if the buyer defaults in payment under the Sale of Goods Act?",
        options: [
          "Stoppage in transit",
          "Rescission of the contract",
          "Right to sue for damages",
          "All of the above"
        ],
        correctAnswer: 3
      },
      {
        question: "Which of the following best describes the nature of a bailment transaction?",
        options: [
          "The property in the goods passes to the bailee upon delivery.",
          "The bailee has ownership of the goods and can sell them.",
          "The property in the goods remains with the bailor and is not intended to pass on delivery.",
          "The bailee must pay for the goods upon delivery."
        ],
        correctAnswer: 2
      },
      {
        question: "Which of the following is NOT a remedy available to the buyer?",
        options: [
          "Right to reject goods",
          "Right to rescind the contract",
          "Right to damages",
          "Right to retain the goods"
        ],
        correctAnswer: 3
      },
      {
        question: "What are the basic elements for ascertaining whether there exists a contract of sale of goods?",
        options: [
          "Price and goods",
          "Goods and services",
          "Price and services",
          "Goods and delivery"
        ],
        correctAnswer: 0
      },
      {
        question: "What must the price in a sale of goods contract be?",
        options: [
          "In barter",
          "In monetary consideration",
          "In goods exchange",
          "In services"
        ],
        correctAnswer: 1
      },
      {
        question: "If the parties have not fixed a price, what is the implication?",
        options: [
          "There is no contract",
          "The contract is valid",
          "The price is assumed to be zero",
          "The price is determined by the court"
        ],
        correctAnswer: 0
      },
      {
        question: "How can the price in a contract of sale be fixed?",
        options: [
          "By the parties",
          "By a valuation or arbitration",
          "By the course of dealing between the parties",
          "All of the above"
        ],
        correctAnswer: 3
      },
      {
        question: "According to section 62(1) of the Act, which of the following is included in the definition of 'Goods'?",
        options: [
          "Money",
          "Emblements",
          "Real property",
          "Things in action"
        ],
        correctAnswer: 1
      },
      {
        question: "Which term is used to describe crops and vegetables produced by the labor of man and harvested annually?",
        options: [
          "Chattels",
          "Industrial growing crops",
          "Emblements",
          "Real property"
        ],
        correctAnswer: 2
      },
      {
        question: "What is excluded from the definition of 'Goods' under the Act?",
        options: [
          "Clothes and shoes",
          "Motor cars and machinery",
          "Bills of exchange and cheques",
          "Growing crops"
        ],
        correctAnswer: 2
      },
      {
        question: "In what case is a contract of sale classified as an agreement to sell?",
        options: [
          "When the buyer pays in advance",
          "When the goods are yet to be manufactured",
          "When the seller retains ownership",
          "When the goods are second-hand"
        ],
        correctAnswer: 1
      },

      {
        question: "What are 'specific goods' as defined by Section 62(1) of the Act?",
        options: [
          "Goods identified and agreed upon at the time a contract of sale is made",
          "Goods that are yet to be manufactured",
          "Goods that are not identified at the time of the contract",
          "Goods that are delivered after the contract is made"
        ],
        correctAnswer: 0
      },
      {
        question: "According to Section 17(1), when is the property in the goods transferred to the buyer?",
        options: [
          "Immediately upon signing the contract",
          "At such time as the parties intend it to be transferred",
          "When the goods are delivered",
          "When the payment is made"
        ],
        correctAnswer: 1
      },
      {
        question: "What does condition mean in the context of the Sale of Goods Act, 1893?",
        options: [
          "A minor term of the contract",
          "A major term that goes to the root of the contract",
          "A term that allows for refunds",
          "A term that must be fulfilled after delivery"
        ],
        correctAnswer: 1
      },
      {
        question: "Under the Sale of Goods Act, 1893, what happens if a seller breaches a warranty?",
        options: [
          "The buyer can reject the goods",
          "The buyer can cancel the entire contract",
          "The buyer can sue for damages but must accept the goods",
          "The buyer cannot take any action"
        ],
        correctAnswer: 2
      },
      {
        question: "Which of the following is a requirement for a valid sale under the Sale of Goods Act, 1893?",
        options: [
          "Goods must be in existence",
          "Payment must be in cash",
          "Delivery must be immediate",
          "The buyer must be a corporation"
        ],
        correctAnswer: 0
      },
      {
        question: "Which of the following is crucial for the formation of a sale of goods contract?",
        options: [
          "Registration with the government",
          "Agreement on price",
          "Presence of legal representation",
          "Goods must be present at the time of agreement"
        ],
        correctAnswer: 1
      },
      {
        question: "In a sale by sample under the Sale of Goods Act, 1893, what is implied about the goods?",
        options: [
          "They will be exactly the same as the sample",
          "They will be of lesser quality than the sample",
          "They must be of merchantable quality",
          "They will be more expensive than the sample"
        ],
        correctAnswer: 2
      },
      {
        question: "Which section of the Sale of Goods Act, 1893, deals with the seller's right to sell the goods?",
        options: [
          "Section 12",
          "Section 16",
          "Section 19",
          "Section 24"
        ],
        correctAnswer: 0
      },
      {
        question: "Under the Sale of Goods Act, 1893, who bears the risk of loss when the property in the goods has passed to the buyer?",
        options: [
          "The seller",
          "The buyer",
          "The carrier",
          "The insurer"
        ],
        correctAnswer: 1
      },
      {
        question: "What is the significance of the term unascertained goods under the Sale of Goods Act, 1893?",
        options: [
          "Goods identified at the time of contract",
          "Goods that have yet to be identified or selected",
          "Goods already delivered",
          "Goods paid for but not yet delivered"
        ],
        correctAnswer: 1
      },
      {
        question: "If a buyer refuses to accept goods, what remedy does the seller have under the Sale of Goods Act, 1893?",
        options: [
          "Sue for the price",
          "Sue for damages",
          "Resell the goods and claim damages for any loss",
          "All of the above"
        ],
        correctAnswer: 3
      },
      {
        question: "What is the significance of a memorandum in writing in a sale of goods contract?",
        options: [
          "It is necessary for large transactions",
          "It serves as proof of agreement",
          "It is required for all contracts",
          "It is optional but recommended"
        ],
        correctAnswer: 1
      },
      {
        question: "Which is required for a contract involving the sale of goods by sample?",
        options: [
          "The buyer must inspect the sample",
          "The seller must guarantee the sample quality",
          "The goods must match the sample",
          "The buyer must sign a waiver"
        ],
        correctAnswer: 2
      },
      {
        question: "What is the legal consequence if the goods do not match the sample provided?",
        options: [
          "The buyer can reject the goods",
          "The seller can adjust the price",
          "The buyer must accept the goods",
          "The buyer can demand a replacement"
        ],
        correctAnswer: 0
      },
      {
        question: "Under the Sale of Goods Act, 1893, which of the following is not a type of implied condition?",
        options: [
          "Condition as to title",
          "Condition as to description",
          "Condition as to merchantable quality",
          "Condition as to future price"
        ],
        correctAnswer: 3
      },
      {
        question: "What does the term caveat emptor mean in the context of the Sale of Goods Act, 1893?",
        options: [
          "Let the seller beware",
          "Buyer beware",
          "Return policy",
          "Guarantee"
        ],
        correctAnswer: 1
      },
      {
        question: "Which of the following does the Sale of Goods Act, 1893, NOT cover?",
        options: [
          "Sale of goods",
          "Barter transactions",
          "Hire-purchase agreements",
          "Both B and C"
        ],
        correctAnswer: 3
      },
      {
        question: "According to the Sale of Goods Act, 1893, when can a buyer reject goods for breach of a condition?",
        options: [
          "At any time before delivery",
          "Only before property passes to the buyer",
          "Only after property passes to the buyer",
          "After delivery but before payment"
        ],
        correctAnswer: 1
      },
      {
        question: "In the Sale of Goods Act, 1893, what does specific goods refer to?",
        options: [
          "Goods identified and agreed upon at the time the contract is made",
          "Generic goods not yet selected",
          "Goods made to order",
          "Goods in bulk quantities"
        ],
        correctAnswer: 0
      },
      {
        question: "Under the Sale of Goods Act, 1893, if goods are sold by description, what is implied?",
        options: [
          "The goods must match the description",
          "The goods must be of the highest quality",
          "The goods must be new",
          "The goods must be cheaper than market value"
        ],
        correctAnswer: 0
      },
      {
        question: "Under Section 17 of the Sale of Goods Act, 1893, when the intention of the parties regarding the transfer of title is unclear, what rule is applied to determine when the property in specific or ascertained goods passes to the buyer?",
        options: [
          "The property passes upon payment of the price",
          "The property passes when the goods are delivered to the buyer",
          "The property passes when the parties have mutually agreed that it should pass",
          "The property passes at the time of the contract, unless a different intention appears"
        ],
        correctAnswer: 3
      },
      {
        question: "According to Section 19(1) of the Sale of Goods Act, 1893, if the seller reserves the right of disposal of the goods, when does the property pass to the buyer?",
        options: [
          "When the buyer takes possession of the goods",
          "When the goods are delivered to the carrier",
          "When the condition upon which the seller reserved the right of disposal is fulfilled",
          "When the payment is made in full by the buyer"
        ],
        correctAnswer: 2
      },
      {
        question: "Under Section 18, Rule 1, how does the Sale of Goods Act, 1893, determine the passing of property in specific goods in a deliverable state?",
        options: [
          "The property passes when the goods are shipped",
          "The property passes when the buyer inspects the goods",
          "The property passes at the time the contract is made, regardless of delivery",
          "The property passes when the buyer pays for the goods"
        ],
        correctAnswer: 2
      },
      {
        question: "Section 20 of the Sale of Goods Act, 1893, deals with the transfer of risk in relation to the goods. If the property in specific goods has passed to the buyer, who bears the risk of loss or damage to the goods?",
        options: [
          "The seller until the goods are delivered",
          "The buyer, even if the goods remain with the seller",
          "The carrier during transit",
          "Both parties share the risk equally"
        ],
        correctAnswer: 1
      },
      {
        question: "In relation to unascertained goods, when does Section 23 of the Sale of Goods Act, 1893, stipulate that the property in the goods passes to the buyer?",
        options: [
          "When the goods are delivered to the buyer",
          "When the goods are appropriated to the contract and both parties are notified",
          "When the goods are shipped by the seller",
          "When the buyer pays the price in full"
        ],
        correctAnswer: 1
      },
      {
        question: "What factors should be considered to ascertain the intention of the parties regarding the transfer of property in the goods?",
        options: [
          "The terms of the contract",
          "The conduct of the parties",
          "The circumstances of the case",
          "All of the above"
        ],
        correctAnswer: 3
      },
      {
        question: "According to the Act, when are goods considered to be in a 'deliverable state'?",
        options: [
          "When the buyer is bound to take delivery of them under the contract",
          "When the goods are free from defects",
          "When the seller agrees to deliver the goods",
          "When the goods are physically transferred to the buyer"
        ],
        correctAnswer: 0
      },
      {
        question: "If the goods are defective, what is the implication for their deliverable state?",
        options: [
          "All defective goods are not in a deliverable state",
          "Defective goods can still be in a deliverable state if the buyer agrees to take delivery",
          "Defective goods are always rejected by the buyer",
          "Defective goods automatically void the contract"
        ],
        correctAnswer: 1
      },
      {
        question: "What does the rule of nemo dat quod non habet mean?",
        options: [
          "No one can sell what they do not own",
          "No one can buy what they do not need",
          "No one can give what they do not have",
          "No one can take what they do not deserve"
        ],
        correctAnswer: 2
      },
      {
        question: "According to Section 21(1) of the Act, what happens when goods are sold by a person who is not their owner?",
        options: [
          "The buyer acquires a better title than the seller had",
          "The buyer acquires no better title to the goods than the seller had",
          "The buyer automatically becomes the owner",
          "The seller retains ownership of the goods"
        ],
        correctAnswer: 1
      },
      {
        question: "What is the main purpose of the rule nemo dat quod non habet?",
        options: [
          "To protect the interest of the buyers",
          "To protect the interest of the property owners",
          "To ensure fair pricing of goods",
          "To regulate the sale of defective goods"
        ],
        correctAnswer: 1
      },
      {
        question: "Under what circumstances can a buyer acquire good title to goods?",
        options: [
          "By buying from the owner or his authorized agent",
          "By buying from any seller in good faith",
          "By paying a higher price for the goods",
          "By obtaining a receipt for the purchase"
        ],
        correctAnswer: 0
      },
      {
        question: "What does the principle of agency permit in the context of selling goods?",
        options: [
          "A seller who is not the owner to transfer title to the buyer",
          "A buyer to return goods at any time",
          "A seller to sell goods without any authority",
          "A buyer to acquire goods without payment"
        ],
        correctAnswer: 0
      },
      {
        question: "According to Section 21 of the Sale of Goods Act, 1893, what is the legal effect if a seller sells goods without having the title to them, and later acquires the title?",
        options: [
          "The sale is void and cannot be ratified",
          "The sale is automatically ratified once the seller acquires the title",
          "The sale remains invalid unless the buyer consents",
          "The sale is valid only if the buyer makes full payment"
        ],
        correctAnswer: 1
      },
      {
        question: "Section 19(2) of the Sale of Goods Act, 1893, states that the property in the goods does not pass if the seller has reserved the right of disposal. What is the implication if the seller ships the goods but retains the bill of lading?",
        options: [
          "The buyer gains title upon receipt of the goods",
          "The seller retains risk but not title",
          "The seller retains title until payment or fulfillment of conditions",
          "The buyer may reject the goods upon delivery"
        ],
        correctAnswer: 2
      },
      {
        question: "How does Section 25(1) of the Sale of Goods Act, 1893, affect the transfer of title when the seller is still in possession of the goods after sale?",
        options: [
          "The original buyer retains title",
          "The seller can transfer a valid title to a third party who buys in good faith",
          "The sale to the third party is void",
          "The seller retains a lien over the goods"
        ],
        correctAnswer: 1
      },
      {
        question: "Section 22 of the Sale of Goods Act, 1893, discusses the transfer of title by a non-owner. Under what condition can a non-owner transfer a good title to the buyer?",
        options: [
          "When the non-owner is a relative of the true owner",
          "When the non-owner is a merchant",
          "When the true owner is estopped from denying the seller’s authority to sell",
          "When the non-owner has physical possession of the goods"
        ],
        correctAnswer: 2
      },
      {
        question: "In Section 27 of the Sale of Goods Act, 1893, what is the primary obligation of the seller in a contract?",
        options: [
          "To deliver the goods",
          "To transfer the title to the goods",
          "To provide warranty of merchantable quality",
          "To ensure the goods are insured"
        ],
        correctAnswer: 1
      },
      {
        question: "The rule of nemo dat quod non habet is fundamental in the Sale of Goods Act, 1893. Which section provides the primary statutory exception to this rule, allowing a non-owner to pass a good title to a bona fide purchaser?",
        options: [
          "Section 12",
          "Section 19",
          "Section 25",
          "Section 27"
        ],
        correctAnswer: 2
      },
      {
        question: "Under Section 23 of the Sale of Goods Act, 1893, when does a sale by a seller who has retained possession of goods after selling them to the original buyer allow the seller to pass good title to a third party?",
        options: [
          "When the goods are delivered to the third party",
          "When the original buyer agrees to the sale",
          "When the third party purchases in good faith and without notice of the prior sale",
          "When the seller offers a discount to the third party"
        ],
        correctAnswer: 2
      },
      {
        question: "Section 25(1) of the Sale of Goods Act, 1893, deals with sales by a person in possession of goods after the sale. What condition must be met for the third party to acquire a good title under this exception to nemo dat quod non habet?",
        options: [
          "The third party must be a relative of the seller",
          "The third party must act in good faith without knowledge of the prior sale",
          "The third party must be a licensed merchant",
          "The third party must pay a higher price"
        ],
        correctAnswer: 1
      },
      {
        question: "In which scenario under Section 27 of the Sale of Goods Act, 1893, does estoppel prevent the true owner from asserting their title against an innocent third party?",
        options: [
          "When the true owner is unaware of the sale",
          "When the true owner stands by and allows the non-owner to appear as if they have the authority to sell",
          "When the true owner has not registered their ownership",
          "When the true owner has a poor credit rating"
        ],
        correctAnswer: 1
      },
      {
        question: "Section 24 of the Sale of Goods Act, 1893, provides an exception to the nemo dat rule in the case of a sale under a voidable title. When can the buyer acquire a good title even if the seller’s title was voidable?",
        options: [
          "When the buyer pays less than market value",
          "When the buyer acts in good faith and without notice of the seller's defective title",
          "When the buyer is a corporation",
          "When the goods are perishable"
        ],
        correctAnswer: 1
      },
      {
        question: "According to the doctrine of estoppel as applied in the Sale of Goods Act, 1893, which of the following does NOT constitute a basis for estoppel preventing the true owner from reclaiming goods?",
        options: [
          "The owner's representation that the seller has the authority to sell",
          "The owner's conduct leading the buyer to believe the seller has authority",
          "The owner’s failure to assert ownership within a reasonable time",
          "The owner’s negligence in safeguarding their property"
        ],
        correctAnswer: 2
      },
      {
        question: "Under Section 25(2) of the Sale of Goods Act, 1893, how does the concept of estoppel interact with the transfer of title when a seller retains a bill of lading after shipping the goods?",
        options: [
          "The buyer gains title upon receiving the goods",
          "Estoppel prevents the seller from transferring title until the bill of lading is handed over",
          "The buyer can resell the goods without title",
          "The carrier holds title until delivery"
        ],
        correctAnswer: 1
      },
      {
        question: "In the context of the Sale of Goods Act, 1893, when can an agent sell goods and bind the principal under the principle of estoppel, creating an exception to nemo dat?",
        options: [
          "When the agent has the principal's explicit consent",
          "When the agent is a relative of the principal",
          "When the agent has apparent authority, and the buyer relies on it",
          "When the agent is an experienced merchant"
        ],
        correctAnswer: 2
      },
      {
        question: "Section 26 of the Sale of Goods Act, 1893, refers to sales by agents acting under a contract of sale. How does this section create an exception to nemo dat by applying estoppel?",
        options: [
          "The principal is estopped from denying the agent's authority if they have previously authorized similar transactions",
          "The principal can claim the goods from the buyer",
          "The agent must first consult with the principal before the sale",
          "The buyer must verify the agent's authority in writing"
        ],
        correctAnswer: 0
      },
      {
        question: "Under Section 27 of the Sale of Goods Act, 1893, how does the rule of estoppel apply when the true owner allows a non-owner to possess and appear to have the authority to sell goods?",
        options: [
          "The true owner loses the right to claim the goods",
          "The non-owner gains full ownership",
          "The buyer acquires a good title if they act in good faith",
          "The true owner can still reclaim the goods"
        ],
        correctAnswer: 2
      },
      {
        question: "Which of the following is a condition in the context of the Sale of Goods Act, 1893?",
        options: [
          "A major term that goes to the root of the contract",
          "A minor term of the contract",
          "A term that allows for refunds",
          "A term that must be fulfilled after delivery"
        ],
        correctAnswer: 0
      },
      {
        question: "Under the Sale of Goods Act, 1893, what is the effect of a breach of a condition?",
        options: [
          "The buyer may repudiate the contract and reject the goods",
          "The buyer must accept the goods but can claim damages",
          "The buyer must renegotiate the contract",
          "The seller can cancel the contract"
        ],
        correctAnswer: 0
      },
      {
        question: "What does “merchantable quality” mean under the Sale of Goods Act?",
        options: [
          "The goods must be of the highest quality",
          "The goods must be fit for the purpose for which such goods are commonly bought",
          "The goods must be cheap",
          "The goods must be brand new"
        ],
        correctAnswer: 1
      },
      {
        question: "In a sale by sample under the Sale of Goods Act, 1893, what is implied about the goods?",
        options: [
          "They must correspond with the sample in quality",
          "They can differ slightly from the sample",
          "They must be of higher quality than the sample",
          "They must be cheaper than the sample"
        ],
        correctAnswer: 0
      },
      {
        question: "Which of the following is an implied term in every contract for the sale of goods under the Sale of Goods Act, 1893?",
        options: [
          "Warranty of satisfaction",
          "Condition as to title",
          "Condition as to resale value",
          "Condition of uniqueness"
        ],
        correctAnswer: 1
      },
      {
        question: "What is the purpose of an exclusion clause in a contract under the Sale of Goods Act, 1893?",
        options: [
          "To guarantee performance",
          "To limit or exclude liability for certain breaches",
          "To ensure a refund",
          "To void the contract"
        ],
        correctAnswer: 1
      },
      {
        question: "When can an exclusion clause be enforced under the Sale of Goods Act, 1893?",
        options: [
          "When it is clearly communicated and agreed upon by the parties",
          "When it is in small print and not noticed by the buyer",
          "When it is implied by law",
          "When it is not mentioned in the contract"
        ],
        correctAnswer: 0
      },
      {
        question: "Which of the following is NOT a factor that affects the enforceability of an exclusion clause?",
        options: [
          "The financial status of the buyer",
          "Whether the clause was incorporated into the contract",
          "Whether the clause was brought to the attention of the buyer",
          "Whether the clause covers the breach in question"
        ],
        correctAnswer: 0
      },
      {
        question: "Under the Sale of Goods Act, what is the effect of an exclusion clause that attempts to exclude liability for personal injury?",
        options: [
          "It is generally void and unenforceable",
          "It is enforceable if agreed upon",
          "It is valid unless challenged in court",
          "It is enforceable only if signed by both parties"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the significance of the Unfair Contract Terms Act in relation to exclusion clauses in the Sale of Goods Act?",
        options: [
          "It strengthens the enforceability of exclusion clauses",
          "It limits the effectiveness of exclusion clauses, especially in consumer contracts",
          "It removes the need for exclusion clauses",
          "It makes exclusion clauses compulsory in all contracts"
        ],
        correctAnswer: 1
      },
      
      {
        question: "What is the effect of a reservation of title clause under the Sale of Goods Act?",
        options: [
          "The seller retains ownership of the goods until certain conditions are met",
          "The buyer automatically gains ownership upon payment",
          "The goods are not legally considered sold until delivered",
          "The buyer must pay an additional fee for ownership"
        ],
        correctAnswer: 0
      },
      {
        question: "Under the Sale of Goods Act, 1893, when does risk pass to the buyer?",
        options: [
          "Upon the delivery of goods",
          "When the property in the goods passes to the buyer",
          "When the contract is signed",
          "When the buyer takes possession"
        ],
        correctAnswer: 1
      },
      {
        question: "What happens to the property in goods that are unascertained at the time of the contract?",
        options: [
          "It passes immediately to the buyer",
          "It does not pass until the goods are ascertained",
          "The seller retains ownership indefinitely",
          "The property is shared between buyer and seller"
        ],
        correctAnswer: 1
      },
      {
        question: "In a sale of specific goods, when does the property pass if the goods are not in a deliverable state?",
        options: [
          "When the goods are put into a deliverable state and the buyer is notified",
          "When the goods are identified",
          "Upon payment of the price",
          "Upon signing of the contract"
        ],
        correctAnswer: 0
      },
      {
        question: "Under the rule of nemo dat quod non habet, what happens if someone sells goods they do not own?",
        options: [
          "The buyer generally does not acquire a good title",
          "The buyer automatically acquires the title",
          "The buyer can claim ownership if unaware of the lack of title",
          "The seller can transfer title by default"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the effect of a retention of title clause in a sale of goods contract?",
        options: [
          "The buyer owns the goods immediately",
          "The seller retains ownership until full payment is made",
          "The buyer can return the goods at any time",
          "The seller must deliver the goods regardless of payment"
        ],
        correctAnswer: 1
      },
      {
        question: "What protects a buyer who purchases goods from a seller who retains possession?",
        options: [
          "The Sale of Goods Act",
          "The Consumer Protection Act",
          "The doctrine of estoppel",
          "The Law of Contracts"
        ],
        correctAnswer: 2
      },
      {
        question: "Under Section 25(1) of the Sale of Goods Act, 1893, when can a seller in possession of goods after a sale pass a good title to a third party?",
        options: [
          "Only if the third party knows of the prior sale",
          "If the third party purchases in good faith and without notice of the previous sale",
          "Only if the original buyer consents",
          "Only if the seller is also the owner"
        ],
        correctAnswer: 1
      },
      {
        question: "What does Section 27 of the Sale of Goods Act, 1893, provide regarding estoppel and the transfer of title?",
        options: [
          "The true owner may be estopped from denying the seller’s right to sell if they allowed the seller to appear as the owner",
          "The buyer must always verify the seller’s ownership",
          "Estoppel applies only if the sale is fraudulent",
          "Estoppel does not apply to sales under the Act"
        ],
        correctAnswer: 0
      },
      {
        question: "Which of the following scenarios does NOT result in the transfer of good title to a buyer under the Sale of Goods Act?",
        options: [
          "Sale by a mercantile agent within their authority",
          "Sale under a voidable title before it is voided",
          "Sale by a thief of stolen goods",
          "Sale by an authorized receiver in bankruptcy"
        ],
        correctAnswer: 2
      }
      

      
      
      
  ];
  


const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [showFeedback, setShowFeedback] = useState(Array(questions.length).fill(false));
  const [score, setScore] = useState(0);

  const handleAnswer = (index) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = index;
    setSelectedAnswers(newSelectedAnswers);

    const newShowFeedback = [...showFeedback];
    newShowFeedback[currentQuestion] = true;
    setShowFeedback(newShowFeedback);

    if (index === questions[currentQuestion].correctAnswer && !showFeedback[currentQuestion]) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Blueking's Sale of Goods Law Quiz</h1>
        <div className="mb-6">
          <p className="text-xl font-semibold mb-4 text-gray-700">
            Question {currentQuestion + 1} of {questions.length}
          </p>
          <p className="text-lg mb-4 text-gray-600">{questions[currentQuestion].question}</p>
        </div>
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`w-full p-3 text-left rounded-md transition-colors duration-300 ${
                selectedAnswers[currentQuestion] === index
                  ? showFeedback[currentQuestion]
                    ? index === questions[currentQuestion].correctAnswer
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                    : 'bg-blue-100 text-blue-800'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
              onClick={() => handleAnswer(index)}
              disabled={showFeedback[currentQuestion]}
            >
              {option}
            </button>
          ))}
        </div>
        {showFeedback[currentQuestion] && (
          <div className={`mt-4 p-3 rounded-md ${
            selectedAnswers[currentQuestion] === questions[currentQuestion].correctAnswer
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {selectedAnswers[currentQuestion] === questions[currentQuestion].correctAnswer ? (
              <div className="flex items-center">
                <Check className="mr-2" />
                <span>Correct! Well done!</span>
              </div>
            ) : (
              <div className="flex items-center">
                <X className="mr-2" />
                <span>Incorrect. The correct answer was: {questions[currentQuestion].options[questions[currentQuestion].correctAnswer]}</span>
              </div>
            )}
          </div>
        )}
        <div className="mt-6 flex justify-between">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors duration-300 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
          >
            <ChevronLeft className="mr-1" />
            Previous
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={nextQuestion}
            disabled={currentQuestion === questions.length - 1}
          >
            Next
            <ChevronRight className="ml-1" />
          </button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold text-gray-700">
            Score: {score} / {questions.length}
          </p>
        </div>
        <footer className="mt-6 text-center">
                  <h1 className="text-md font-bold mb-6 text-center text-gray-800">This quiz website was built by <a href="https://blueking.vercel.app" target='blank' className="font-extrabold underline-offset-1 text-blue-700">BLUEKING</a></h1>

        </footer>
      </div>
    </div>
  );
};

export default QuizApp;
