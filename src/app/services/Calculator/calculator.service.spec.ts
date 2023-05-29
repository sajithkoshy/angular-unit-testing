import { LoggerService } from "../Logger/logger.service";
import { CalculatorService } from "./calculator.service";

describe('CalculatorService',()=>{

    it('should add two number',()=>{ 
      let loggerService = new LoggerService();
      const calculator = new CalculatorService(loggerService);
      let result = calculator.add(2,3);
      expect(result).toBe(5);

    });
   
    it('should subtract two numbers',()=>{
      let loggerService = new LoggerService();
      const calculator = new CalculatorService(loggerService);
      let result = calculator.subtract(2,3);
      expect(result).toBe(-1);
    });

})