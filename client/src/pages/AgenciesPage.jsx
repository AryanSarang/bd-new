import ProductInfo from "../components/ProductInfo";
import ReviewBox from "../components/ReviewBox";

export default function(){

    const data = {
        img: "",
        name: "monday Work Management",
        star: "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jzc2IDM5NyAxMjQgMjQnPjxwYXRoIGNsYXNzPSdzdDAnIGQ9J00xNzggNDA2LjdsNi41LTEuMSAzLjUtNi4xLS4xIDE2LTYuMSAzIC44LTYuOXptLTk5LjkuMmw2LjUtMS4xIDMuNC02LjUgMy4xIDYuNCA3IDEuMi00LjkgNC44IDEgNy02LjItMy02LjIgMyAuOC02Ljl6bTI0LjkgMGw2LjUtMS4xIDMuNC02LjUgMy4yIDYuNCA2LjkgMS4yLTQuOSA0LjggMS4xIDctNi4zLTMtNi4xIDMgLjgtNi45em0yNS40IDBsNi41LTEuMSAzLjQtNi41IDMuMSA2LjQgNyAxLjItNC45IDQuOCAxLjEgNy02LjMtMy02LjIgMyAuOC02Ljl6bTI0LjYgMGw2LjUtMS4xIDMuNC02LjUgMy4yIDYuNCA2LjkgMS4yLTQuOSA0LjggMS4xIDctNi4zLTMtNi4xIDMgLjgtNi45eicgZmlsbD0nI0ZGNDkyQycvPjxwYXRoIGNsYXNzPSdzdDEnIGQ9J00xMDAgNDA2LjNsLTguMy0xLjItMy43LTcuNS0zLjcgNy41LTguMyAxLjIgNiA1LjgtMS40IDguMyA3LjQtMy45IDcuNCAzLjktMS40LTguMyA2LTUuOHptLTEyIDguNGwtNS4yIDIuOCAxLTUuOC00LjItNC4xIDUuOS0uOSAyLjYtNS4zIDIuNiA1LjMgNS45LjktNC4yIDQuMSAxIDUuOC01LjQtMi44em0zNy04LjRsLTguMy0xLjItMy43LTcuNS0zLjcgNy41LTguMyAxLjIgNiA1LjgtMS40IDguMyA3LjQtMy45IDcuNCAzLjktMS40LTguMyA2LTUuOHptLTEyIDguNGwtNS4yIDIuOCAxLTUuOC00LjItNC4xIDUuOS0uOSAyLjYtNS4zIDIuNiA1LjMgNS45LjktNC4yIDQuMSAxIDUuOC01LjQtMi44em0zNy04LjRsLTguMy0xLjItMy43LTcuNS0zLjcgNy41LTguMyAxLjIgNiA1LjgtMS40IDguMyA3LjQtMy45IDcuNCAzLjktMS40LTguMyA2LTUuOHptLTEyIDguNGwtNS4yIDIuOCAxLTUuOC00LjItNC4xIDUuOS0uOSAyLjYtNS4zIDIuNiA1LjMgNS45LjktNC4yIDQuMSAxIDUuOC01LjQtMi44em0zNy04LjRsLTguMy0xLjItMy43LTcuNS0zLjcgNy41LTguMyAxLjIgNiA1LjgtMS40IDguMyA3LjQtMy45IDcuNCAzLjktMS40LTguMyA2LTUuOHptLTEyIDguNGwtNS4yIDIuOCAxLTUuOC00LjItNC4xIDUuOS0uOSAyLjYtNS4zIDIuNiA1LjMgNS45LjktNC4yIDQuMSAxIDUuOC01LjQtMi44em0zNy04LjRsLTguMy0xLjItMy43LTcuNS0zLjcgNy41LTguMyAxLjIgNiA1LjgtMS40IDguMyA3LjQtMy45IDcuNCAzLjktMS40LTguMyA2LTUuOHptLTEyIDguNGwtNS4yIDIuOCAxLTUuOC00LjItNC4xIDUuOS0uOSAyLjYtNS4zIDIuNiA1LjMgNS45LjktNC4yIDQuMSAxIDUuOC01LjQtMi44eicgZmlsbD0nI0ZGNDkyQycvPjwvc3ZnPg==",
        review: 3980,
        banner: "https://images.g2crowd.com/uploads/optimized_product_banner/image/1347/b31dc6776ffc8ac588373084278abc9f.jpg",
        reviews: [
                {
                    name: "Preet K",
                    heading : "versatile for a PM tool",
                    description: "It has a free tier. Helps in testing the software easily before purchasing it. I can maintain different accounts for personal and work related item linkdjf a jakdfja kjaf dlkjl asljfl sf lsjdf",
                    profile: null,
                    star: 4.5,
                    starImg: "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jzc2IDM5NyAxMjQgMjQnPjxwYXRoIGNsYXNzPSdzdDAnIGQ9J00xNzggNDA2LjdsNi41LTEuMSAzLjUtNi4xLS4xIDE2LTYuMSAzIC44LTYuOXptLTk5LjkuMmw2LjUtMS4xIDMuNC02LjUgMy4xIDYuNCA3IDEuMi00LjkgNC44IDEgNy02LjItMy02LjIgMyAuOC02Ljl6bTI0LjkgMGw2LjUtMS4xIDMuNC02LjUgMy4yIDYuNCA2LjkgMS4yLTQuOSA0LjggMS4xIDctNi4zLTMtNi4xIDMgLjgtNi45em0yNS40IDBsNi41LTEuMSAzLjQtNi41IDMuMSA2LjQgNyAxLjItNC45IDQuOCAxLjEgNy02LjMtMy02LjIgMyAuOC02Ljl6bTI0LjYgMGw2LjUtMS4xIDMuNC02LjUgMy4yIDYuNCA2LjkgMS4yLTQuOSA0LjggMS4xIDctNi4zLTMtNi4xIDMgLjgtNi45eicgZmlsbD0nI0ZGNDkyQycvPjxwYXRoIGNsYXNzPSdzdDEnIGQ9J00xMDAgNDA2LjNsLTguMy0xLjItMy43LTcuNS0zLjcgNy41LTguMyAxLjIgNiA1LjgtMS40IDguMyA3LjQtMy45IDcuNCAzLjktMS40LTguMyA2LTUuOHptLTEyIDguNGwtNS4yIDIuOCAxLTUuOC00LjItNC4xIDUuOS0uOSAyLjYtNS4zIDIuNiA1LjMgNS45LjktNC4yIDQuMSAxIDUuOC01LjQtMi44em0zNy04LjRsLTguMy0xLjItMy43LTcuNS0zLjcgNy41LTguMyAxLjIgNiA1LjgtMS40IDguMyA3LjQtMy45IDcuNCAzLjktMS40LTguMyA2LTUuOHptLTEyIDguNGwtNS4yIDIuOCAxLTUuOC00LjItNC4xIDUuOS0uOSAyLjYtNS4zIDIuNiA1LjMgNS45LjktNC4yIDQuMSAxIDUuOC01LjQtMi44em0zNy04LjRsLTguMy0xLjItMy43LTcuNS0zLjcgNy41LTguMyAxLjIgNiA1LjgtMS40IDguMyA3LjQtMy45IDcuNCAzLjktMS40LTguMyA2LTUuOHptLTEyIDguNGwtNS4yIDIuOCAxLTUuOC00LjItNC4xIDUuOS0uOSAyLjYtNS4zIDIuNiA1LjMgNS45LjktNC4yIDQuMSAxIDUuOC01LjQtMi44em0zNy04LjRsLTguMy0xLjItMy43LTcuNS0zLjcgNy41LTguMyAxLjIgNiA1LjgtMS40IDguMyA3LjQtMy45IDcuNCAzLjktMS40LTguMyA2LTUuOHptLTEyIDguNGwtNS4yIDIuOCAxLTUuOC00LjItNC4xIDUuOS0uOSAyLjYtNS4zIDIuNiA1LjMgNS45LjktNC4yIDQuMSAxIDUuOC01LjQtMi44em0zNy04LjRsLTguMy0xLjItMy43LTcuNS0zLjcgNy41LTguMyAxLjIgNiA1LjgtMS40IDguMyA3LjQtMy45IDcuNCAzLjktMS40LTguMyA2LTUuOHptLTEyIDguNGwtNS4yIDIuOCAxLTUuOC00LjItNC4xIDUuOS0uOSAyLjYtNS4zIDIuNiA1LjMgNS45LjktNC4yIDQuMSAxIDUuOC01LjQtMi44eicgZmlsbD0nI0ZGNDkyQycvPjwvc3ZnPg==",
                    date: "12/23/2024",
                    market: "Small-Business (50 or fewer emp.)"
                },{
                    name: "Andrii H",
                    heading: "My second brain, second life and second pair of hands",
                    description: "1. It's very useful to make my own library and notes system. 2. With calendar and forms it's become much better",
                    profile: null,
                    star: 4.5,
                    starImg: "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jzc2IDM5NyAxMjQgMjQnPjxwYXRoIGNsYXNzPSdzdDAnIGQ9J00xNzggNDA2LjdsNi41LTEuMSAzLjUtNi4xLS4xIDE2LTYuMSAzIC44LTYuOXptLTk5LjkuMmw2LjUtMS4xIDMuNC02LjUgMy4xIDYuNCA3IDEuMi00LjkgNC44IDEgNy02LjItMy02LjIgMyAuOC02Ljl6bTI0LjkgMGw2LjUtMS4xIDMuNC02LjUgMy4yIDYuNCA2LjkgMS4yLTQuOSA0LjggMS4xIDctNi4zLTMtNi4xIDMgLjgtNi45em0yNS40IDBsNi41LTEuMSAzLjQtNi41IDMuMSA2LjQgNyAxLjItNC45IDQuOCAxLjEgNy02LjMtMy02LjIgMyAuOC02Ljl6bTI0LjYgMGw2LjUtMS4xIDMuNC02LjUgMy4yIDYuNCA2LjkgMS4yLTQuOSA0LjggMS4xIDctNi4zLTMtNi4xIDMgLjgtNi45eicgZmlsbD0nI0ZGNDkyQycvPjxwYXRoIGNsYXNzPSdzdDEnIGQ9J00xMDAgNDA2LjNsLTguMy0xLjItMy43LTcuNS0zLjcgNy41LTguMyAxLjIgNiA1LjgtMS40IDguMyA3LjQtMy45IDcuNCAzLjktMS40LTguMyA2LTUuOHptLTEyIDguNGwtNS4yIDIuOCAxLTUuOC00LjItNC4xIDUuOS0uOSAyLjYtNS4zIDIuNiA1LjMgNS45LjktNC4yIDQuMSAxIDUuOC01LjQtMi44em0zNy04LjRsLTguMy0xLjItMy43LTcuNS0zLjcgNy41LTguMyAxLjIgNiA1LjgtMS40IDguMyA3LjQtMy45IDcuNCAzLjktMS40LTguMyA2LTUuOHptLTEyIDguNGwtNS4yIDIuOCAxLTUuOC00LjItNC4xIDUuOS0uOSAyLjYtNS4zIDIuNiA1LjMgNS45LjktNC4yIDQuMSAxIDUuOC01LjQtMi44em0zNy04LjRsLTguMy0xLjItMy43LTcuNS0zLjcgNy41LTguMyAxLjIgNiA1LjgtMS40IDguMyA3LjQtMy45IDcuNCAzLjktMS40LTguMyA2LTUuOHptLTEyIDguNGwtNS4yIDIuOCAxLTUuOC00LjItNC4xIDUuOS0uOSAyLjYtNS4zIDIuNiA1LjMgNS45LjktNC4yIDQuMSAxIDUuOC01LjQtMi44em0zNy04LjRsLTguMy0xLjItMy43LTcuNS0zLjcgNy41LTguMyAxLjIgNiA1LjgtMS40IDguMyA3LjQtMy45IDcuNCAzLjktMS40LTguMyA2LTUuOHptLTEyIDguNGwtNS4yIDIuOCAxLTUuOC00LjItNC4xIDUuOS0uOSAyLjYtNS4zIDIuNiA1LjMgNS45LjktNC4yIDQuMSAxIDUuOC01LjQtMi44em0zNy04LjRsLTguMy0xLjItMy43LTcuNS0zLjcgNy41LTguMyAxLjIgNiA1LjgtMS40IDguMyA3LjQtMy45IDcuNCAzLjktMS40LTguMyA2LTUuOHptLTEyIDguNGwtNS4yIDIuOCAxLTUuOC00LjItNC4xIDUuOS0uOSAyLjYtNS4zIDIuNiA1LjMgNS45LjktNC4yIDQuMSAxIDUuOC01LjQtMi44eicgZmlsbD0nI0ZGNDkyQycvPjwvc3ZnPg==",
                    date: "12/24/2024",
                    market: "Mid-Market (51-1000 emp.)"
                },{
                    name: "João C.",
                    heading: "Great tool for many purposes, but there’s a steep learning curve",
                    star:4.5,
                    description: "Notion is great to use as a knowledge base for your business or to get organized in the day to day. It's flexible to adjust to your neees in a variety of work in the i dont know its just .",
                    profile: "https://lh3.googleusercontent.com/a/ACg8ocIbRy5jLlDJROr3_Tndnumqj6PplxLN2HCJ3o_y8cE-v0TEnKs=s96-c",
                    starImg: "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jzc2IDM5NyAxMjQgMjQnPjxwYXRoIGNsYXNzPSdzdDAnIGQ9J00xNzggNDA2LjdsNi41LTEuMSAzLjUtNi4xLS4xIDE2LTYuMSAzIC44LTYuOXptLTk5LjkuMmw2LjUtMS4xIDMuNC02LjUgMy4xIDYuNCA3IDEuMi00LjkgNC44IDEgNy02LjItMy02LjIgMyAuOC02Ljl6bTI0LjkgMGw2LjUtMS4xIDMuNC02LjUgMy4yIDYuNCA2LjkgMS4yLTQuOSA0LjggMS4xIDctNi4zLTMtNi4xIDMgLjgtNi45em0yNS40IDBsNi41LTEuMSAzLjQtNi41IDMuMSA2LjQgNyAxLjItNC45IDQuOCAxLjEgNy02LjMtMy02LjIgMyAuOC02Ljl6bTI0LjYgMGw2LjUtMS4xIDMuNC02LjUgMy4yIDYuNCA2LjkgMS4yLTQuOSA0LjggMS4xIDctNi4zLTMtNi4xIDMgLjgtNi45eicgZmlsbD0nI0ZGNDkyQycvPjxwYXRoIGNsYXNzPSdzdDEnIGQ9J00xMDAgNDA2LjNsLTguMy0xLjItMy43LTcuNS0zLjcgNy41LTguMyAxLjIgNiA1LjgtMS40IDguMyA3LjQtMy45IDcuNCAzLjktMS40LTguMyA2LTUuOHptLTEyIDguNGwtNS4yIDIuOCAxLTUuOC00LjItNC4xIDUuOS0uOSAyLjYtNS4zIDIuNiA1LjMgNS45LjktNC4yIDQuMSAxIDUuOC01LjQtMi44em0zNy04LjRsLTguMy0xLjItMy43LTcuNS0zLjcgNy41LTguMyAxLjIgNiA1LjgtMS40IDguMyA3LjQtMy45IDcuNCAzLjktMS40LTguMyA2LTUuOHptLTEyIDguNGwtNS4yIDIuOCAxLTUuOC00LjItNC4xIDUuOS0uOSAyLjYtNS4zIDIuNiA1LjMgNS45LjktNC4yIDQuMSAxIDUuOC01LjQtMi44em0zNy04LjRsLTguMy0xLjItMy43LTcuNS0zLjcgNy41LTguMyAxLjIgNiA1LjgtMS40IDguMyA3LjQtMy45IDcuNCAzLjktMS40LTguMyA2LTUuOHptLTEyIDguNGwtNS4yIDIuOCAxLTUuOC00LjItNC4xIDUuOS0uOSAyLjYtNS4zIDIuNiA1LjMgNS45LjktNC4yIDQuMSAxIDUuOC01LjQtMi44em0zNy04LjRsLTguMy0xLjItMy43LTcuNS0zLjcgNy41LTguMyAxLjIgNiA1LjgtMS40IDguMyA3LjQtMy45IDcuNCAzLjktMS40LTguMyA2LTUuOHptLTEyIDguNGwtNS4yIDIuOCAxLTUuOC00LjItNC4xIDUuOS0uOSAyLjYtNS4zIDIuNiA1LjMgNS45LjktNC4yIDQuMSAxIDUuOC01LjQtMi44em0zNy04LjRsLTguMy0xLjItMy43LTcuNS0zLjcgNy41LTguMyAxLjIgNiA1LjgtMS40IDguMyA3LjQtMy45IDcuNCAzLjktMS40LTguMyA2LTUuOHptLTEyIDguNGwtNS4yIDIuOCAxLTUuOC00LjItNC4xIDUuOS0uOSAyLjYtNS4zIDIuNiA1LjMgNS45LjktNC4yIDQuMSAxIDUuOC01LjQtMi44eicgZmlsbD0nI0ZGNDkyQycvPjwvc3ZnPg==",                    date: "12/20/2024",
                    market: "Mid-Market (51-1000 emp.)"
                }
            ],
    };

    return <div className="md:py-28 ">
        <div className="mx-auto xl:w-[1270px] lg:w-[1000px] md:w-[750px] sm:w-[600px] bg-white">
            <div className="border">
                <img src={data.banner} alt="" />
            </div>
            <div className="block relative border min-h-44">
                <div className="absolute bg-white left-3 top-2 xl:top-auto xl:left-5 xl:bottom-6 p-2 border rounded">
                    <a className="flex justify-center items-center w-20 h-20  lg:w-36 lg:h-36 lg:min-w-36 lg:min-h-36">
                        <img src="https://images.g2crowd.com/uploads/product/hd_favicon/d90375c3cf6bce3fc82e6d2e208e7419/monday-com-monday-com.svg" width={117} height={117} alt="" />
                    </a> 
                </div>
                
                <div className="inline-block pl-32 lg:pl-48 mt-3">
                    <div className="font-medium text-2xl">
                        {data.name}
                    </div>
                    <div className="text-[#246f9e] hover:text-blue-900 my-1.5 cursor-pointer">
                        By {data.name}
                    </div>
                    <div className="flex gap-x-2 mb-2">
                        <img className="" src={data.star} width={120} alt="" />
                        <span className="text-[#5a39a2] cursor-pointer hover:underline">
                            {data.review} reviews
                        </span>
                    </div>
                    <div>
                        Verified
                    </div>
                </div>
                <div className="md:pl-32 lg:pl-48 xl:pl-auto xl:float-right my-3 md:my-0 flex flex-col gap-y-2 font-semibold text-lg md:flex-row  ">
                    <button className="w-auto mx-3 md:mx-0 md:my-3 text-orange-600 px-6 py-1.5  rounded border border-orange-600 hover:bg-orange-600 hover:text-white">
                        Contact {data.name}
                    </button>
                    <button className="w-auto mx-3 md:my-3 mr-3 px-6 py-1.5  bg-orange-600 text-white rounded hover:bg-[#df1f00]"> 
                        Try for free
                    </button>
                </div>

            </div>
            <div className="border p-6">
                <ProductInfo/>
                <div>
                    <h2 className="font-bold text-2xl mb-2">
                        Recent {data.name} Reviews
                    </h2>
                    <div className="md:flex gap-3">

                    {data.reviews.map((data, i) => (
                        <ReviewBox key={i} review={data}/>
                    ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
}