-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "id_post" TEXT NOT NULL,
    "accuracy" INTEGER NOT NULL,
    "emergency" BOOLEAN NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "timestampReceived" TIMESTAMP(3) NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lon" DOUBLE PRECISION NOT NULL,
    "timestampinsert" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);
