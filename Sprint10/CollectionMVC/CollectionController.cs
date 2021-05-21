using System;
using System.Collections.Generic;
using System.Text;

namespace CollectionMVC
{
    class CollectionController
    {
        private CollectionModel aCollectionModel;
        private CollectionView aCollectionView;
        

        public CollectionController()
        {
            aCollectionModel = new CollectionModel();
            aCollectionView = new CollectionView();

            //get souvenir choice from user
            string souvenirType = aCollectionView.GetSouvenirType();

            if (souvenirType == "1")
            {
                bool magnetFlag = true;
                while (magnetFlag)
                {
                    string userChoice = aCollectionView.GetUserChoice();

                    if (userChoice == "1")
                    {
                        Magnet tempMagnet = new Magnet();  //temp obj for magnet
                                                           //get from user
                        tempMagnet.Location = aCollectionView.GetMagnetLocation();
                        tempMagnet.Year = aCollectionView.GetMagnetYear();
                        tempMagnet.Description = aCollectionView.GetMagnetDescription();
                        //move tempMagnet to model
                        aCollectionModel.AddMagnet(tempMagnet);
                        
                    }
                    else if (userChoice == "2")
                    {
                        int count = aCollectionModel.MagnetCount();
                        for (int i = 0; i < count; i++)
                        {   Magnet temp2Magnet = new Magnet();
                            temp2Magnet = aCollectionModel.GetMagnet(i);
                            aCollectionView.PrintMagnet(temp2Magnet);
                        }
                        //magnetFlag = false;
                    }
                    else if (userChoice == "3")
                    {
                        Console.WriteLine("Good Bye!");
                        magnetFlag = false;
                    }     
                    
                }
                
            }
            else if (souvenirType == "2")
            {
                Shirt tempShirt = new Shirt();  //temp obj for shirt
                //get from user
                tempShirt.Location = aCollectionView.GetShirtLocation();
                tempShirt.Year = aCollectionView.GetShirtYear();
                tempShirt.ShirtType = aCollectionView.GetShirtType();
                //move tempShirt to model
                aCollectionModel.AddShirt(tempShirt);
                return;
            }
            else if (souvenirType == "3")
            {
                Glass tempGlass = new Glass();  //temp obj for glass
                //get from user
                tempGlass.Location = aCollectionView.GetGlassLocation();
                tempGlass.Year = aCollectionView.GetGlassYear();
                tempGlass.Size = aCollectionView.GetGlassSize();
                //move tempGlass to model
                aCollectionModel.AddGlass(tempGlass);
                return;
            }
            else Console.WriteLine("Please enter 1, 2, or 3");


            

            //Shirt temp2Shirt = new Shirt();
            //temp2Shirt = aCollectionModel.GetShirt(aCollectionModel.ShirtCount() - 1);
            //aCollectionView.PrintShirt(temp2Shirt);

        }
   
    }
}
