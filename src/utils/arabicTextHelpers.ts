export const ArabicTextHelpers = {
  parseArabic: (str: any) => {
    if (!str) {
      return str;
    }

    const isnum = /^\d+$/.test(str);

    if (isnum) {
      return str;
    }

    const hasPlus = str?.startsWith?.('+');
    const number = Number(
      str.replaceAll(/[٠١٢٣٤٥٦٧٨٩]/g, function (d: any) {
        return d.codePointAt(0) - 1632; // Convert Arabic numbers
      }),
    );

    if (Number.isNaN(number)) {
      return str;
    }

    if (hasPlus) {
      return `+${number}`;
    }

    if (str.startsWith('٠٠')) {
      return `00${number}`;
    }

    if (str.startsWith('٠')) {
      return `0${number}`;
    }

    return `${number}`;
  },
  convertToArabNum: (str: any) => {
    return str.replaceAll(/[٠١٢٣٤٥٦٧٨٩]/g, function (d: any) {
      return d.codePointAt(0) - 1632; // Convert Arabic numbers
    });
  },
};
