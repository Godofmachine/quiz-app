import React, { useState } from 'react';
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
      "An offer and acceptance",
      "Goods and money consideration",
      "A written agreement",
      "A witness"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the difference between a sale and an agreement to sell?",
    options: [
      "A sale transfers ownership immediately; an agreement to sell transfers ownership in the future",
      "A sale involves goods, while an agreement to sell involves services",
      "A sale requires a contract, while an agreement to sell does not",
      "A sale is always binding, while an agreement to sell is not"
    ],
    correctAnswer: 0
  },
  {
    question: "In a contract for the sale of goods yet to be manufactured, the contract is classified as?",
    options: [
      "A sale",
      "A bailment",
      "An agreement to sell",
      "A consignment"
    ],
    correctAnswer: 2
  },
  {
    question: "The Sale of Goods Act 1893 is a statute of general application in which of the following?",
    options: [
      "Nigeria",
      "United Kingdom",
      "United States",
      "India"
    ],
    correctAnswer: 0
  },
  {
    question: "Which of the following must be present in a valid contract of sale?",
    options: [
      "Transfer of property",
      "Delivery of goods",
      "Payment of consideration",
      "All of the above"
    ],
    correctAnswer: 0
  },
  {
    question: "Which term refers to the legal transfer of ownership in a sale of goods?",
    options: [
      "Possession",
      "Title",
      "Property passing",
      "Delivery"
    ],
    correctAnswer: 2
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
      "A contract without conditions",
      "A contract with multiple conditions",
      "A contract that is voidable",
      "A contract with a warranty"
    ],
    correctAnswer: 0
  },
  {
    question: "Who must have the capacity to enter into a contract for the sale of goods?",
    options: [
      "The buyer only",
      "The seller only",
      "Both parties",
      "The broker"
    ],
    correctAnswer: 2
  },
  {
    question: "What is the consequence of selling necessaries to a minor under the Sale of Goods Act?",
    options: [
      "The minor can reject the goods",
      "The minor must pay a reasonable price",
      "The contract is void",
      "The seller has no legal recourse"
    ],
    correctAnswer: 1
  },
  {
    question: "What is required for a valid sale of goods contract?",
    options: [
      "A written agreement",
      "A verbal agreement",
      "Either written or oral agreement",
      "A notarized document"
    ],
    correctAnswer: 2
  },
  {
    question: "Which of the following contracts is enforceable by action under the Sale of Goods Act?",
    options: [
      "A contract of sale of goods valued at N5",
      "A contract of sale of goods valued at N20 or above",
      "A contract of sale of services",
      "A barter agreement"
    ],
    correctAnswer: 1
  },
  {
    question: "The proviso to Section 2 of the Sale of Goods Act applies to which individuals?",
    options: [
      "Minors only",
      "Infants, married women, and insane persons",
      "Corporations",
      "Foreign nationals"
    ],
    correctAnswer: 1
  },
  {
    question: "Which element is NOT part of forming a contract of sale?",
    options: [
      "Offer",
      "Acceptance",
      "Consideration",
      "Guarantee"
    ],
    correctAnswer: 3
  },
  {
    question: "What type of price agreement is essential for a contract of sale?",
    options: [
      "The price must be a guess",
      "The price must be negotiated by a third party",
      "The price must be monetary",
      "The price can be in services"
    ],
    correctAnswer: 2
  },
  {
    question: "How can a sale of goods contract be made according to the Sale of Goods Act?",
    options: [
      "Only in writing",
      "Orally, in writing, or by conduct",
      "Only by conduct",
      "Only by oral agreement"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the importance of a note or memorandum in a contract for the sale of goods?",
    options: [
      "It is always required",
      "It is necessary for contracts of goods above a certain value",
      "It is only required for international sales",
      "It is needed only for goods that are yet to be delivered"
    ],
    correctAnswer: 1
  },
  {
    question: "Who is responsible for the goods under a contract of sale of goods?",
    options: [
      "The buyer",
      "The seller",
      "The courier",
      "Both the buyer and the seller"
    ],
    correctAnswer: 3
  },
  {
    question: "What is the seller’s primary duty in a sale of goods contract?",
    options: [
      "To accept payment",
      "To provide a warranty",
      "To deliver the goods",
      "To negotiate the price"
    ],
    correctAnswer: 2
  },
  {
    question: "When must the seller deliver the goods to avoid a breach of contract?",
    options: [
      "Immediately upon signing the contract",
      "By the date agreed in the contract",
      "Whenever it is convenient for the seller",
      "Within a reasonable time"
    ],
    correctAnswer: 1
  },
  {
    question: "What does the term “C.I.F” stand for in a sale of goods contract?",
    options: [
      "Cash in Full",
      "Cost, Insurance, and Freight",
      "Currency in Flow",
      "Customs, Import, and Freight"
    ],
    correctAnswer: 1
  },
  {
    question: "In a C.I.F contract, when does the risk pass to the buyer?",
    options: [
      "When the goods arrive at the buyer's location",
      "When the goods are loaded on the ship",
      "When the contract is signed",
      "When the insurance is paid"
    ],
    correctAnswer: 1
  },
  {
    question: "What does “F.O.B” mean in a sale of goods contract?",
    options: [
      "Freight on Board",
      "Free on Board",
      "Freight over Board",
      "Free over Board"
    ],
    correctAnswer: 1
  },
  {
    question: "In an F.O.B contract, when does the seller’s responsibility for the goods end?",
    options: [
      "When the goods are delivered to the buyer",
      "When the contract is signed",
      "When the goods pass the ship’s rail",
      "When payment is received"
    ],
    correctAnswer: 2
  },
  {
    question: "What is the buyer’s duty after receiving the goods?",
    options: [
      "To inspect the goods",
      "To make the payment",
      "To insure the goods",
      "To return the goods"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the duty of the buyer in a sale of goods contract?",
    options: [
      "To accept the goods",
      "To negotiate the price",
      "To ensure delivery",
      "To provide a warranty"
    ],
    correctAnswer: 0
  },
  {
    question: "Which of the following is NOT a remedy available to the seller?",
    options: [
      "Right to withhold delivery",
      "Right to resell the goods",
      "Right to recover damages",
      "Right to a refund"
    ],
    correctAnswer: 3
  },
  {
    question: "Under what condition can the buyer reject the goods?",
    options: [
      "If the goods are late",
      "If the goods are not insured",
      "If the goods are damaged",
      "If the goods are expensive"
    ],
    correctAnswer: 2
  },
  {
    question: "What action can a seller take if the buyer wrongfully rejects the goods?",
    options: [
      "Sue for damages",
      "Return the goods to the manufacturer",
      "Withhold payment",
      "Reduce the price"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the term for goods that are identified and agreed upon at the time of the contract of sale?",
    options: [
      "Specific goods",
      "Unascertained goods",
      "Future goods",
      "Contingent goods"
    ],
    correctAnswer: 0
  },
  {
    question: "What type of goods can be the subject of a contract of sale?",
    options: [
      "Only existing goods",
      "Only future goods",
      "Existing or future goods",
      "Only goods identified at the time of the contract"
    ],
    correctAnswer: 2
  },
  {
    question: "What happens to the contract if the goods perish before the sale is completed?",
    options: [
      "The contract is void",
      "The buyer must pay a reduced price",
      "The seller is required to provide a replacement",
      "The contract remains enforceable"
    ],
    correctAnswer: 0
  },
  {
    question: "What does the term 'condition' refer to in a sale of goods contract?",
    options: [
      "A minor term in the contract",
      "A major term that goes to the root of the contract",
      "An optional term",
      "A term related to delivery time"
    ],
    correctAnswer: 1
  },
  {
    question: "What is a warranty in the context of a sale of goods?",
    options: [
      "A major term of the contract",
      "A minor term that does not go to the root of the contract",
      "An optional term",
      "A term related to payment"
    ],
    correctAnswer: 1
  },
  {
    question: "If a condition is breached in a sale of goods contract, what can the injured party do?",
    options: [
      "Only claim damages",
      "Only terminate the contract",
      "Either claim damages or terminate the contract",
      "Ignore the breach"
    ],
    correctAnswer: 2
  },
  {
    question: "If a warranty is breached in a sale of goods contract, what is the buyer entitled to?",
    options: [
      "Only terminate the contract",
      "Claim damages and terminate the contract",
      "Only claim damages",
      "Request a replacement"
    ],
    correctAnswer: 2
  },
  {
    question: "In a sale of goods, what is an implied term?",
    options: [
      "A term that is stated in the contract",
      "A term that the parties must discuss",
      "A term that is not written but is legally presumed",
      "A term related to the price"
    ],
    correctAnswer: 2
  },
  {
    question: "Which of the following is an implied condition in a sale of goods?",
    options: [
      "Goods must be of satisfactory quality",
      "Goods must be new",
      "Goods must be delivered immediately",
      "Goods must be certified"
    ],
    correctAnswer: 0
  },
  {
    question: "In the absence of an express agreement, when does property in the goods pass from seller to buyer?",
    options: [
      "When the contract is signed",
      "When the goods are delivered",
      "When the buyer inspects the goods",
      "When payment is made"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the principle of 'caveat emptor'?",
    options: [
      "Buyer beware",
      "Seller beware",
      "Buyer beware unless a warranty is provided",
      "Buyer beware unless the goods are insured"
    ],
    correctAnswer: 0
  },
  {
    question: "When does the risk pass to the buyer in a sale of goods?",
    options: [
      "When the contract is made",
      "When the goods are delivered to the buyer",
      "When the payment is made",
      "When the buyer inspects the goods"
    ],
    correctAnswer: 1
  },
  {
    question: "What does 'satisfactory quality' mean under the Sale of Goods Act?",
    options: [
      "The goods meet the standards of the trade",
      "The goods are of a high standard",
      "The goods are adequate for the purpose for which goods of that kind are commonly supplied",
      "The goods are flawless"
    ],
    correctAnswer: 2
  },
  {
    question: "In a sale of goods, when is a buyer entitled to reject the goods?",
    options: [
      "If they are of unsatisfactory quality",
      "If they are of high quality",
      "If they are different from the sample",
      "If they are delivered late"
    ],
    correctAnswer: 0
  },
  {
    question: "What is an 'unascertained good'?",
    options: [
      "Goods that have not been identified and agreed upon at the time of the contract",
      "Goods that have been agreed upon but not yet delivered",
      "Goods that have been delivered but not paid for",
      "Goods that are of indeterminate quality"
    ],
    correctAnswer: 0
  },
  {
    question: "When does property in unascertained goods pass to the buyer?",
    options: [
      "When the goods are ascertained",
      "When the contract is signed",
      "When the goods are delivered",
      "When the price is paid"
    ],
    correctAnswer: 0
  },
  {
    question: "Which of the following is an example of specific goods?",
    options: [
      "A specific car identified by its VIN",
      "A car of a specific model",
      "Any car from a dealership",
      "A car that will be manufactured in the future"
    ],
    correctAnswer: 0
  },
  {
    question: "What is meant by 'delivery' in the context of a sale of goods?",
    options: [
      "The transfer of possession from seller to buyer",
      "The payment of goods",
      "The signing of the contract",
      "The completion of the transaction"
    ],
    correctAnswer: 0
  },
  {
    question: "When does acceptance of goods occur under the Sale of Goods Act?",
    options: [
      "When the buyer signs the contract",
      "When the buyer inspects the goods",
      "When the buyer indicates to the seller that they have accepted the goods",
      "When the goods are delivered"
    ],
    correctAnswer: 2
  },
  {
    question: "What can a buyer do if the seller fails to deliver the goods?",
    options: [
      "Sue for damages",
      "Withhold payment",
      "Cancel the contract",
      "Request a new delivery date"
    ],
    correctAnswer: 0
  },
  {
    question: "Which of the following is NOT an implied term under the Sale of Goods Act?",
    options: [
      "Goods must match the description",
      "Goods must be fit for purpose",
      "Goods must be of satisfactory quality",
      "Goods must be cheap"
    ],
    correctAnswer: 3
  },
  {
    question: "What is the seller’s right to cure?",
    options: [
      "The right to offer a replacement for non-conforming goods",
      "The right to withhold delivery",
      "The right to rescind the contract",
      "The right to sue for damages"
    ],
    correctAnswer: 0
  },
  {
    question: "What remedy is available if the seller breaches a condition of the contract?",
    options: [
      "Rescind the contract",
      "Sue for specific performance",
      "Claim damages only",
      "Negotiate a new contract"
    ],
    correctAnswer: 0
  },
  {
    question: "What is a fundamental breach?",
    options: [
      "A minor breach that can be ignored",
      "A breach that goes to the root of the contract",
      "A breach that is agreed upon by both parties",
      "A breach that can be remedied easily"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the consequence of a fundamental breach?",
    options: [
      "The innocent party can only claim damages",
      "The contract remains intact",
      "The innocent party can rescind the contract",
      "The innocent party must renegotiate"
    ],
    correctAnswer: 2
  },
  {
    question: "Which of the following is an example of a fundamental breach?",
    options: [
      "Delivering goods of unsatisfactory quality",
      "Delivering goods late",
      "Delivering goods without a warranty",
      "Delivering goods without packaging"
    ],
    correctAnswer: 0
  },
  {
    question: "What is a repudiatory breach?",
    options: [
      "A breach that entitles the other party to terminate the contract",
      "A breach that is minor and can be remedied",
      "A breach that has been waived by the innocent party",
      "A breach that relates to the price"
    ],
    correctAnswer: 0
  },
  {
    question: "If the seller delivers less than the contracted quantity, what can the buyer do?",
    options: [
      "Reject the whole delivery",
      "Accept the delivery and pay a reduced price",
      "Claim damages",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    question: "What is the seller’s lien?",
    options: [
      "The seller’s right to keep possession of the goods until payment is made",
      "The seller’s right to resell the goods",
      "The seller’s right to withhold delivery",
      "The seller’s right to sue for damages"
    ],
    correctAnswer: 0
  },
  {
    question: "Under what condition can a seller exercise a lien on the goods?",
    options: [
      "When the buyer refuses to take delivery",
      "When the buyer delays payment",
      "When the buyer is declared bankrupt",
      "When the buyer inspects the goods"
    ],
    correctAnswer: 1
  },
  {
    question: "What is stoppage in transit?",
    options: [
      "The seller’s right to stop the goods in transit after parting with possession",
      "The buyer’s right to return the goods",
      "The courier’s right to delay delivery",
      "The manufacturer’s right to stop production"
    ],
    correctAnswer: 0
  },
  {
    question: "When can the seller stop the goods in transit?",
    options: [
      "When the buyer repudiates the contract",
      "When the buyer is insolvent",
      "When the goods are damaged in transit",
      "When the payment is delayed"
    ],
    correctAnswer: 1
  },
  {
    question: "Which of the following is NOT a remedy available to the buyer?",
    options: [
      "Right to reject the goods",
      "Right to sue for damages",
      "Right to specific performance",
      "Right to retain the goods without payment"
    ],
    correctAnswer: 3
  },
  {
    question: "What is the measure of damages for non-delivery?",
    options: [
      "The difference between the contract price and the market price",
      "The difference between the contract price and the cost price",
      "The contract price",
      "The market price"
    ],
    correctAnswer: 0
  },
  {
    question: "What does 'remoteness of damage' refer to in the context of damages?",
    options: [
      "Damages that are too trivial to be compensated",
      "Damages that are too far removed from the breach to be recoverable",
      "Damages that occur in a different jurisdiction",
      "Damages that are foreseeable"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the 'duty to mitigate' in the context of damages?",
    options: [
      "The innocent party’s obligation to minimize the damages",
      "The guilty party’s right to minimize the damages",
      "The court’s right to reduce the damages awarded",
      "The third party’s obligation to intervene"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the purpose of damages in a sale of goods contract?",
    options: [
      "To punish the breaching party",
      "To deter future breaches",
      "To compensate the injured party",
      "To rescind the contract"
    ],
    correctAnswer: 2
  },
  {
    question: "What is the role of a third party in a sale of goods contract?",
    options: [
      "To inspect the goods",
      "To facilitate the payment",
      "To negotiate the terms",
      "To enforce the contract"
    ],
    correctAnswer: 3
  },
  {
    question: "What is the consequence if a seller resells the goods to a third party?",
    options: [
      "The original buyer can sue for damages",
      "The contract is void",
      "The original buyer has no recourse",
      "The seller must offer a replacement"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the legal effect of an auction sale without reserve?",
    options: [
      "The seller must accept the highest bid",
      "The seller can reject the highest bid",
      "The auctioneer can withdraw the goods",
      "The buyer can change the bid"
    ],
    correctAnswer: 0
  },
  {
    question: "In an auction sale, when is a contract formed?",
    options: [
      "When the bidder raises the paddle",
      "When the hammer falls",
      "When the auctioneer announces the item",
      "When the payment is made"
    ],
    correctAnswer: 1
  },
  {
    question: "What is a collateral contract in the context of a sale of goods?",
    options: [
      "A contract that is secondary to the main contract",
      "A contract that replaces the main contract",
      "A contract that is the same as the main contract",
      "A contract that contradicts the main contract"
    ],
    correctAnswer: 0
  },
  {
    question: "What is an exemption clause?",
    options: [
      "A clause that limits or excludes liability",
      "A clause that increases liability",
      "A clause that offers a warranty",
      "A clause that guarantees delivery"
    ],
    correctAnswer: 0
  },
  {
    question: "Which of the following is NOT a limitation of an exemption clause?",
    options: [
      "It cannot exclude liability for fraud",
      "It cannot exclude liability for breach of a condition",
      "It cannot exclude liability for gross negligence",
      "It cannot limit the time for making a claim"
    ],
    correctAnswer: 3
  },
  {
    question: "What is the legal effect of a disclaimer on a sale of goods contract?",
    options: [
      "It limits or excludes liability",
      "It increases liability",
      "It cancels the contract",
      "It guarantees performance"
    ],
    correctAnswer: 0
  },
  {
    question: "What does 'passing of risk' mean in a sale of goods contract?",
    options: [
      "The point at which the buyer takes on the risk of loss or damage",
      "The point at which the seller takes on the risk of loss or damage",
      "The point at which the risk is transferred to a third party",
      "The point at which the goods are paid for"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the purpose of insurance in a sale of goods contract?",
    options: [
      "To guarantee delivery",
      "To mitigate the risk of loss or damage",
      "To increase the value of goods",
      "To reduce the price of goods"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the difference between a warranty and a guarantee?",
    options: [
      "A warranty is a term of the contract, while a guarantee is a separate promise",
      "A warranty is legally binding, while a guarantee is not",
      "A warranty can be oral, while a guarantee must be written",
      "A warranty is for a fixed period, while a guarantee is indefinite"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the buyer’s remedy if the goods do not conform to the contract?",
    options: [
      "Sue for damages",
      "Accept the goods and pay less",
      "Reject the goods",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    question: "When can the buyer claim specific performance?",
    options: [
      "When damages are not an adequate remedy",
      "When the goods are unique",
      "When the buyer still wants the goods",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    question: "What does the term 'force majeure' refer to in a sale of goods contract?",
    options: [
      "An unforeseen event that prevents performance",
      "A legal guarantee",
      "A price increase",
      "A minor breach"
    ],
    correctAnswer: 0
  },
  {
    question: "Which of the following is NOT typically included in a force majeure clause?",
    options: [
      "Natural disasters",
      "War",
      "Strikes",
      "Financial difficulty"
    ],
    correctAnswer: 3
  },
  {
    question: "What is the legal effect of a force majeure clause?",
    options: [
      "It excuses non-performance of the contract",
      "It increases the contract price",
      "It reduces the quality of goods",
      "It guarantees performance"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the buyer’s remedy if the seller delivers goods of a lesser quality?",
    options: [
      "Accept the goods and pay less",
      "Reject the goods",
      "Sue for damages",
      "All of the above"
    ],
    correctAnswer: 3
  },
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
