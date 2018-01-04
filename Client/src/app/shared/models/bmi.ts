export class BMI {
   index: number;
   abbr: string;
   description: string;

   constructor(weight: number, height: number) {
      if (weight && height) {
         let i = weight * 10000 / (height * height);
         this.index = i;

         if (i < 15) {
            this.abbr = 'vsU';
            this.description = 'very severely underweight';
            return;
         }
         if (i < 16) {
            this.abbr = 'sU';
            this.description = 'severely underweight';
            return;
         }
         if (i < 18.5) {
            this.abbr = 'U';
            this.description = 'underweight';
            return;
         }
         if (i < 25) {
            this.abbr = 'N';
            this.description = 'normal (healty weight)';
            return;
         }
         if (i < 30) {
            this.abbr = 'O';
            this.description = 'overweight';
            return;
         }
         if (i < 35) {
            this.abbr = 'O I';
            this.description = 'Obese Class I (Moderately obese)';
            return;
         }
         if (i < 40) {
            this.abbr = 'O II';
            this.description = 'Obese Class II (Severely obese)';
            return;
         }

         this.abbr = 'O III';
         this.description = 'Obese Class III (Very severely obese)';

      }
   }
}