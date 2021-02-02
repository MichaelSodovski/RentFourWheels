using System;

namespace RentFourWheels
{
    public abstract class BaseLogic:IDisposable
    {
        protected rent4wheelsDBContext DB = new rent4wheelsDBContext();

        public void Dispose()
        {
            DB.Dispose();
        }
    }
}
