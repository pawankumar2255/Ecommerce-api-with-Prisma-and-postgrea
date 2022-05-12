/*
  Warnings:

  - You are about to drop the column `discountedPrice` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `inStock` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `isDiscounted` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Product` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Char(255)` to `VarChar(225)`.
  - You are about to drop the column `createdAt` on the `Seller` table. All the data in the column will be lost.
  - You are about to drop the column `gstNumber` on the `Seller` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Seller` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `Seller` table. The data in that column could be lost. The data in that column will be cast from `Char(255)` to `VarChar(30)`.
  - You are about to alter the column `phoneNumber` on the `Seller` table. The data in that column could be lost. The data in that column will be cast from `Char(15)` to `VarChar(10)`.
  - Added the required column `createAt` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discountPrice` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Seller` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "discountedPrice",
DROP COLUMN "inStock",
DROP COLUMN "isDiscounted",
DROP COLUMN "updatedAt",
ADD COLUMN     "createAt" INTEGER NOT NULL,
ADD COLUMN     "discountPrice" INTEGER NOT NULL,
ADD COLUMN     "isDiscount" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isStock" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(225);

-- AlterTable
ALTER TABLE "Seller" DROP COLUMN "createdAt",
DROP COLUMN "gstNumber",
DROP COLUMN "updatedAt",
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "gdtNumber" TEXT,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(30),
ALTER COLUMN "phoneNumber" SET DATA TYPE VARCHAR(10);
