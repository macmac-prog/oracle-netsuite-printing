"use client";
import { useAuth } from "@/context/authcontext";
import { PrintPageProps } from "@/types/types";
import Size1Collection from "@/utils/collectionreceipt/size1";
import Size2Collection from "@/utils/collectionreceipt/size2";
import Size3Collection from "@/utils/collectionreceipt/size3";
import Size4Collection from "@/utils/collectionreceipt/size4";
import LuzonSize from "@/utils/collectionreceipt/LuzonSize";

const CollectionReceipt: React.FC<PrintPageProps> = ({ data }) => {
  const { user } = useAuth();

  return (
    <div>
      {(() => {
        // const size1 = [
        //   "JIME",
        //   "MADRI",
        //   "OROD",
        //   "DSMBN",
        //   "DSMBN",
        //   "DSMSB",
        //   "MARA2",
        //   "BALA",
        //   "DIPD",
        //   "SALA",
        //   "DSMV",
        //   "CARC2",
        //   "LIPA",
        //   "DSMDB",
        //   "DSMCA",
        //   "RIZD",
        //   "AURD",
        //   "JIMEDSM",
        //   "ILID",
        //   "DATH",
        //   "KATI",
        //   "MOLD2",
        //   "DSMTA",
        //   "BONI",
        //   "DSMTG",
        //   "SDAV",
        //   "DAPI",
        //   "CARMB",
        //   "LABD",
        //   "ILIG",
        //   "VITA",
        //   "BANTA",
        //   "CATAR",
        //   "DIPD2",
        //   "IPID",
        //   "MOLD",
        //   "SUCD",
        //   "DSMK",
        //   "TALI",
        //   "BALAM",
        //   "CALD",
        //   "DSMPO",
        //   "YATI",
        //   "ALEN",
        //   "BINAN",
        //   "LILD",
        //   "OROH",
        //   "SIND",
        //   "TUBOD",
        //   "BULU",
        //   "MARD",
        //   "MEDE",
        //   "ALIC",
        //   "IMED",
        //   "LOAY",
        //   "MOLDS",
        //   "MALA",
        //   "VILLA",
        //   "CARC",
        //   "GUIN2",
        //   "REMI",
        // ];
        // const size2 = [
        //   "GENT",
        //   "SANT2",
        //   "SAGBA",
        //   "TALI2",
        //   "SANM",
        //   "TANZ2",
        //   "ALAD",
        //   "TANZ3",
        //   "INIT2",
        // ];
        // const size3 = ["BOLOD", "MING", "DANAO", "TOMAS", "CATAR2", "CARMC2"];
        // const size4 = ["SANP", "FAMY", "LAPU", "ANTIP", "SROS", "UBAY", "NAIC"];

        const luzonSizeData = [
          "ANTIP",
          "BINAN",
          "CARMO",
          "DASMA",
          "FAMY",
          "GENT",
          "LIPA",
          "NAIC",
          "PAGS",
          "SANJ",
          "SANM",
          "SANP",
          "SILA",
          "SLAS",
          "SROS",
          "TANH",
          "TANZ",
          "TANZ2",
          "TANZ3",
        ];

        // if (size1.some((branch) => branch === user?.branchCode)) {
        //   return <Size1Collection data={data} />;
        // } else if (size2.some((branch) => branch === user?.branchCode)) {
        //   return <Size2Collection data={data} />;
        // } else if (size3.some((branch) => branch === user?.branchCode)) {
        //   return <Size3Collection data={data} />;
        // } else if (size4.some((branch) => branch === user?.branchCode)) {
        //   return <Size4Collection data={data} />;
        // } else {
        //   return <>None</>;
        // }

        if (luzonSizeData.some((branch) => branch === user?.branchCode)) {
          return <LuzonSize data={data} />;
        } else {
          return (
            <div className="text-center flex items-center justify-center h-screen font-bold text-lg">
              Sorry, This page is temporary unavailable on your branch
            </div>
          );
        }
      })()}
    </div>

    // <div>
    //   {(() => {
    //     switch (user?.branchName) {
    //       case "SMCT Carmen":
    //         return <Size1 data={data} />;
    //       case "SMCT Tanza 2":
    //         return <Size1 data={data} />;
    //       default:
    //         return <>None</>;
    //     }
    //   })()}
    // </div>
  );
};

export default CollectionReceipt;
