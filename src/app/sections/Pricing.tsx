"use client";

import React, { useState } from "react";
import Span from "../components/ui/Span";
import Button from "../components/ui/Button";
import PricingCard from "../components/PricingCard/PricingCard";
import PricingCardContainer from "../components/PricingCard/PricingCardContainer";
import PricingCardHeader from "../components/PricingCard/PricingCardHeader";
import PricingCardCaption from "../components/PricingCard/PricingCardCaption";
import PricingCardPrice from "../components/PricingCard/PricingCardPrice";
import PricingCardDivider from "../components/PricingCard/PricingCardDivider";
import PricingCardListHeader from "../components/PricingCard/PricingCardListHeader";
import PricingCardListContainer from "../components/PricingCard/PricingCardListContainer";
import PricingCardDuration from "../components/PricingCard/PricingCardDuration";
import PriceCardListItem from "../components/PricingCard/PriceCardListItem";
import { motion } from "framer-motion";

type Props = {};

interface PricesProps extends Record<string, Record<string, number>> {}

const prices: PricesProps = {
  month: {
    essential: 2600,
    pro: 3595,
    turbo: 5200,
  },
  quarter: {
    essential: 7020,
    pro: 9706,
    turbo: 14040,
  },
  year: {
    essential: 26520,
    pro: 36670,
    turbo: 53040,
  },
};

const Pricing = (props: Props) => {
  const [price, setPrice] = useState("quarter");

  return (
    <section
      id="pricing"
      className="py-16 px-3 md:px-6 flex flex-col items-center bg-white-200"
    >
      <div className="w-full flex justify-center">
        <div className="flex flex-col items-center">
          <Span fontColor="accented">SAVE 5%</Span>
          <Button
            intent="outline-right-unrounded"
            active={price === "month" ? "priceCardDuration" : "inactive"}
            className="border-primary-400 font-bold px-4 md:text-2xl"
            onClick={() => setPrice("month")}
          >
            MONTHLY
          </Button>
        </div>

        <div className="flex flex-col items-center">
          <Span fontColor="accented">SAVE 10%</Span>
          <Button
            intent="outline-unrounded"
            className="border-primary-400 font-bold px-4 md:text-2xl"
            active={price === "quarter" ? "priceCardDuration" : "inactive"}
            onClick={() => setPrice("quarter")}
          >
            QUARTERLY
          </Button>
        </div>

        <div className="flex flex-col items-center">
          <Span fontColor="accented">SAVE 15%</Span>
          <Button
            intent="outline-left-unrounded"
            className="border-primary-400 font-bold px-4 md:text-2xl"
            active={price === "year" ? "priceCardDuration" : "inactive"}
            onClick={() => setPrice("year")}
          >
            YEARLY
          </Button>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-10 lg:flex-row">
        <PricingCard>
          <PricingCardContainer>
            <PricingCardHeader>Essential</PricingCardHeader>
            <PricingCardCaption>
              Great for basic UI/UX design needs
            </PricingCardCaption>
          </PricingCardContainer>
          <PricingCardContainer>
            <PricingCardPrice>&#x24;{prices[price].essential}</PricingCardPrice>
            <PricingCardDuration>
              PER {price.toLocaleUpperCase()}
            </PricingCardDuration>
          </PricingCardContainer>
          <PricingCardDivider />
          <PricingCardContainer>
            <PricingCardListHeader>WHAT'S INCLUDED:</PricingCardListHeader>
            <PricingCardListContainer>
              <PriceCardListItem>UI execution</PriceCardListItem>
              <PriceCardListItem>Connect on Slack</PriceCardListItem>
              <PriceCardListItem>
                One 30 minute meeting a week
              </PriceCardListItem>
            </PricingCardListContainer>
          </PricingCardContainer>
          <PricingCardContainer>
            <PricingCardListHeader>DESIGN TEAM</PricingCardListHeader>
            <PricingCardListContainer>
              <PriceCardListItem>
                1 designer working with 4-5 other customers at the same time
              </PriceCardListItem>
            </PricingCardListContainer>
          </PricingCardContainer>
          <Button intent="price-card">TRY FOR FREE</Button>
        </PricingCard>

        <PricingCard>
          <PricingCardContainer>
            <PricingCardHeader>Pro</PricingCardHeader>
            <PricingCardCaption>
              Great for end-to-end product design{" "}
            </PricingCardCaption>
          </PricingCardContainer>
          <PricingCardContainer>
            <PricingCardPrice>&#x24;{prices[price].pro}</PricingCardPrice>
            <PricingCardDuration>
              PER {price.toLocaleUpperCase()}
            </PricingCardDuration>
          </PricingCardContainer>
          <PricingCardDivider />
          <PricingCardContainer>
            <PricingCardListHeader>WHAT'S INCLUDED:</PricingCardListHeader>
            <PricingCardListContainer>
              <PriceCardListItem>Everything in Essential</PriceCardListItem>
              <PriceCardListItem>
                Full UI/UX design and research
              </PriceCardListItem>
              <PriceCardListItem>Dev ready Figma files </PriceCardListItem>
              <PriceCardListItem>One 1 hour meeting a week</PriceCardListItem>
            </PricingCardListContainer>
          </PricingCardContainer>
          <PricingCardContainer>
            <PricingCardListHeader>DESIGN TEAM</PricingCardListHeader>
            <PricingCardListContainer>
              <PriceCardListItem>1 design lead </PriceCardListItem>
              <PriceCardListItem>
                1 designer working on 2-3 other customers at the same time{" "}
              </PriceCardListItem>
            </PricingCardListContainer>
          </PricingCardContainer>
          <Button intent="price-card">TRY FOR FREE</Button>
        </PricingCard>

        <PricingCard>
          <PricingCardContainer>
            <PricingCardHeader>Turbo</PricingCardHeader>
            <PricingCardCaption>
              Great for products that require more design horsepower and tight
              timelines{" "}
            </PricingCardCaption>
          </PricingCardContainer>
          <PricingCardContainer>
            <PricingCardPrice>&#x24;{prices[price].turbo}</PricingCardPrice>
            <PricingCardDuration>
              PER {price.toLocaleUpperCase()}
            </PricingCardDuration>
          </PricingCardContainer>
          <PricingCardDivider />
          <PricingCardContainer>
            <PricingCardListHeader>WHAT'S INCLUDED:</PricingCardListHeader>
            <PricingCardListContainer>
              <PriceCardListItem>
                Everything in Essential and Pro
              </PriceCardListItem>
              <PriceCardListItem>User Testing</PriceCardListItem>
              <PriceCardListItem>Figma Prototypes </PriceCardListItem>
              <PriceCardListItem>Flexible meetings </PriceCardListItem>
              <PriceCardListItem>
                Custom workflows to speed up delivery{" "}
              </PriceCardListItem>
            </PricingCardListContainer>
          </PricingCardContainer>
          <PricingCardContainer>
            <PricingCardListHeader>DESIGN TEAM</PricingCardListHeader>
            <PricingCardListContainer>
              <PriceCardListItem>1 designer lead</PriceCardListItem>
              <PriceCardListItem>
                1 designer working with 4-5 other customers at the same time
              </PriceCardListItem>
            </PricingCardListContainer>
          </PricingCardContainer>
          <Button intent="price-card">TRY FOR FREE</Button>
        </PricingCard>
      </div>

      <motion.div
        initial={{ opacity: 0, y: "20%" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6 items-center mt-16"
      >
        <div className="bg-black-100 w-10/12 h-0.5"></div>
        <h3 className="font-bold text-lg md:text-xl text-center">
          Hey! Need a custom plan?{" "}
          <Span fontColor="accented" className="text-base font-bold">
            Contact us!
          </Span>
        </h3>
        <span className="text-center">
          Try us risk free for 7 days, if you don’t love us, get your money
          back.
        </span>
        <Button className="font-bold py-3 px-10 text-2xl md:text-3xl lg:text-4xl">
          GET STARTED
        </Button>
      </motion.div>
    </section>
  );
};

export default Pricing;
