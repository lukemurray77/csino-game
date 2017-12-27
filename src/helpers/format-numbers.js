export const formatNumbers =  (number) => {
  switch (true) {
    case (number < 10000): {
      return `$${number}`;
    }
    case (number >= 10000 && number < 100000): {
      return `$${number.toString().slice(0, -3)}.${number.toString().slice(2,4)}K`;
    }
    case (number >= 100000 && number < 1000000): {
      return `$${number.toString().slice(0, -3)}K`;
    }
    case (number >= 1000000 && number < 10000000): {
      return `$${number.toString().slice(0, 1)}.${number.toString().slice(1, 3)}M`;
    }
  }
};


export const formatButtonNumbers =  (number) => {
  let x = number.toString();
  switch (number) {
    case 500:
    case 100:
    case 25:
    case 5:
    case 1: {
      return `$${number}`;
    }
    case 2500: {
      return `$${number.toString().slice(0,1)}K`;
    }
    case 10000: {
      return `$${number.toString().slice(0,2)}K`;
    }
    case 25000: {
      return `$${number.toString().slice(0,2)}.${number.toString().slice(1,2)}K`;
    }
    case 500000:
    case 100000: {
      return `$${number.toString().slice(0,3)}K`;
    }
    case 2500000: {
      return `$${number.toString().slice(0,1)}.${number.toString().slice(1,2)}M`;
    }
    case 10000000: {
      return `$${number.toString().slice(0,2)}M`;
    }
  }
};
