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
