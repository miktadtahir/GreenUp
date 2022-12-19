import usePrice from "@lib/use-price";
import isEmpty from "lodash/isEmpty";
import React from "react";

type Props = {
  minPrice: number;
  selectedVariation?: any;
  basePriceClassName?: string;
  discountPriceClassName?: string;
};

const VariationPrice: React.FC<Props> = ({
                                           selectedVariation,
                                           minPrice,

                                           basePriceClassName = "text-heading font-semibold text-base md:text-xl lg:text-2xl",
                                           discountPriceClassName = "font-segoe text-gray-400 text-base lg:text-xl ltr:pl-2.5 rtl:pr-2.5 -mt-0.5 md:mt-0",
                                         }: any) => {
  const { price, basePrice } = usePrice(
      selectedVariation && {
        amount: selectedVariation.sale_price
            ? selectedVariation.sale_price
            : selectedVariation.price,
        baseAmount: selectedVariation.price,
      }
  );

  const { price: min_price } = usePrice({
    amount: minPrice,
  });



  return (
      <>
        <div className={basePriceClassName}>
          {!isEmpty(selectedVariation)
              ? `${price}`
              : `${min_price}`}
        </div>

      </>
  );
};

export default VariationPrice;
