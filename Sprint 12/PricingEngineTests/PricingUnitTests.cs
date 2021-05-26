using Microsoft.VisualStudio.TestTools.UnitTesting;
using PricingEngineApp;

namespace PricingEngineTests
{
    [TestClass]
    public class PricingUnitTests
    {
        [TestMethod]  // scenario  -                        holiday?  quantity  Retail price  Unit Price (after discount) 
                      // not on test matrix
                      // Min retail price not met            no        20        .50            .50
        public void CalculateUnitPrice_BelowMinPrice()  // holiday false and price 1.00 or less
        {
            // arrange
            PricingEngine engine = new PricingEngine(false);
            // act
            decimal unitPrice = engine.CalculateUnitPrice(10, 0.50m);
            // assert
            Assert.AreEqual(unitPrice, 0.50m);

        }

        [TestMethod]  // scenario  -                        holiday?  quantity  Retail price  Unit Price (after discount) 
                      // Min retail price not met            no        20        1.00            .90
        public void CalculateUnitPrice_MinPriceEdge()  // holiday false and price equal min price of 1.00 
        {
            // arrange
            PricingEngine engine = new PricingEngine(false);
            // act
            decimal unitPrice = engine.CalculateUnitPrice(20, 1.00m);
            // assert
            Assert.AreEqual(unitPrice, .90m);
        }

        [TestMethod]  // scenario  -                        holiday?  quantity  Retail price  Unit Price (after discount) 
                      // Min retail price met                no        20        1.01            .909
        public void CalculateUnitPrice_MinPriceMet()  // holiday false and price equal price of 1.01 > min price
        {
            // arrange
            PricingEngine engine = new PricingEngine(false);
            // act
            decimal unitPrice = engine.CalculateUnitPrice(20, 1.01m);
            // assert
            Assert.AreEqual(unitPrice, .909m);
        }

        [TestMethod]  // scenario  -                        holiday?  quantity  Retail price  Unit Price (after discount) 
                      // Min qty not met                      no        10        10.00            10.00
        public void CalculateUnitPrice_BelowMinQty()  //holiday false - qty 10 or less
        {
            // arrange
            PricingEngine engine = new PricingEngine(false);
            // act
            decimal unitPrice = engine.CalculateUnitPrice(10, 10.00m);
            // assert
            Assert.AreEqual(unitPrice, 10.00m);
        }

        [TestMethod]  // scenario  -                        holiday?  quantity  Retail price  Unit Price (after discount) 
                      // Qty 11-20 lower bound               no        11        10.00        11*10*10%/11 = 9.00
        public void CalculateUnitPrice_MinQtyLower()
        {
            // arrange
            PricingEngine engine = new PricingEngine(false);
            // act
            decimal unitPrice = engine.CalculateUnitPrice(11, 10.00m);
            // assert
            Assert.AreEqual(unitPrice, 9.00m);
        }

        [TestMethod]  // scenario  -                        holiday?  quantity  Retail price  Unit Price (after discount) 
                      // Qty 11-20 upper bound               no        20        10.00        20*10*10%/20 = 9.00
        public void CalculateUnitPrice_MinQtyUpper()
        {
            // arrange
            PricingEngine engine = new PricingEngine(false);
            // act
            decimal unitPrice = engine.CalculateUnitPrice(20, 10.00m);
            // assert
            Assert.AreEqual(unitPrice, 9.00m);
        }

        [TestMethod]  // scenario  -                        holiday?  quantity  Retail price  Unit Price (after discount) 
                      // Qty > 20                             no        21        10.00        21*10*20%/21 = 8.00
        public void CalculateUnitPrice_QtyGT20()
        {
            // arrange
            PricingEngine engine = new PricingEngine(false);
            // act
            decimal unitPrice = engine.CalculateUnitPrice(21, 10.00m);
            // assert
            Assert.AreEqual(unitPrice, 8.00m);
        }

        [TestMethod]  // scenario  -                        holiday?  quantity  Retail price  Unit Price (after discount) 
                      // Holday min retail price not met      yes        1500        1.00        1500*1(less(20%+10% holiday))/1500 = .70
        public void CalculateUnitPrice_HolidayBelowMinPrice()
        {
            // arrange
            PricingEngine engine = new PricingEngine(true);
            // act
            decimal unitPrice = engine.CalculateUnitPrice(1500, 1.00m);
            // assert
            Assert.AreEqual(unitPrice, 0.70m);
            
        }

        [TestMethod]  // scenario  -                        holiday?  quantity  Retail price  Unit Price (after discount) 
                      // Holday min total not met             yes        10        100.00        100(not > holiday min) = 100
        public void CalculateUnitPrice_HolidayBelowMinTotal()
        {
            // arrange
            PricingEngine engine = new PricingEngine(true);
            // act
            decimal unitPrice = engine.CalculateUnitPrice(10, 100.00m);
            // assert
            Assert.AreEqual(unitPrice, 100.00m);
        }

        [TestMethod]  // scenario  -                        holiday?  quantity  Retail price  Unit Price (after discount) 
                      // Holday min qty not met             yes        10        150.00        150(holiday min met 10% discount) = 135
        public void CalculateUnitPrice_HolidayBelowMinQty()  //Not sure on this one
        {
            // Test the discount for holiday and quantity = 10 and total 
            // discounted amount is above the holiday threshold 1000
            // arrange
            PricingEngine engine = new PricingEngine(true);
            // act
            decimal unitPrice = engine.CalculateUnitPrice(10, 150.00m);
            // assert
            Assert.AreEqual(unitPrice, 135.00m);

        }

        [TestMethod]  // scenario  -                        holiday?  quantity  Retail price  Unit Price (after discount) 
                      // Holday min qty met                   yes        11        150.00      150(10% qty discount and 10% holiday discount) = 120
        public void CalculateUnitPrice_HolidayMinQty()  //holiday with min quantity = 10
        {
            // Test the discount for holiday and quantity > 10 and total
            // discounted amount is above the holiday threshold (1000)

            // arrange
            PricingEngine engine = new PricingEngine(true);
            // act
            decimal unitPrice = engine.CalculateUnitPrice(11, 150.00m);
            // assert
            Assert.AreEqual(unitPrice, 120.00m);
        }
    }
}
