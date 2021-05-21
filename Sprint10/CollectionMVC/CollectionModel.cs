using System;
using System.Collections.Generic;
using System.Text;

namespace CollectionMVC
{
    class CollectionModel
    {
        //'declare' lists
        List<Shirt> myShirtList;
        List<Magnet> myMagnetList;
        List<Glass> myGlassList;

        public CollectionModel()
        {
            //Initialize the array of magnets and create empty lists
            myMagnetList = new List<Magnet>(); 
            myShirtList = new List<Shirt>(); 
            myGlassList = new List<Glass>();
        }

        public Magnet GetMagnet(int magnetIndex)
        {
            return myMagnetList[magnetIndex];
        }
        public void AddMagnet(Magnet myMagnet)
        {
            myMagnetList.Add(myMagnet);
        }
        public int MagnetCount()
        {
            return myMagnetList.Count;
        }

        public Shirt GetShirt(int shirtindex)
        {
            return myShirtList[shirtindex];
        }

        public int ShirtCount()
        {
            return myShirtList.Count;
        }

        public void AddShirt(Shirt myShirt)
        {
            myShirtList.Add(myShirt);
        }


        public Glass GetGlass(int glassIndex)
        {
            return myGlassList[glassIndex];
        }
        public void AddGlass(Glass myGlass)
        {
            myGlassList.Add(myGlass);
        }
        public int GlassCount()
        {
            return myGlassList.Count;
        }
    }
}
