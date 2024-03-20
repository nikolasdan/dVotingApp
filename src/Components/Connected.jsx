import React from "react";

const Connected = (props) => {
  return (
    <div classNameName="text-center items-center justify-center h-screen">
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="relative isolate">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <img
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                src="https://images6.alphacoders.com/134/1341130.png"
                alt=""
              ></img>
              <div className="w-full flex-auto">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Connected to Metamask
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Metamask Account: {props.account}
                </p>
                <p className="mt- text-lg leading-8 text-gray-300">
                  Remaining Time: {props.remainingTime}
                </p>
                {props.showButton ? (
                  <p className="mt-6 text-3xl leading-7 text-gray-300 text-center">
                    You have already voted
                  </p>
                ) : (
                  <div>
                    <input
                      type="number"
                      placeholder="Entern Candidate Index"
                      className="p-1 rounded-md text-black text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-none"
                      value={props.number}
                      onChange={props.handleNumberChange}
                    ></input>
                    <br />
                    <button
                      className="rounded-md bg-white mt-2 px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      onClick={props.voteFunction}
                    >
                      Vote
                    </button>
                  </div>
                )}

                <div className="px-4 sm:px-6 lg:px-8">
                  <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                          <thead>
                            <tr>
                              <th
                                scope="col"
                                className=" py-3.5 text-center text-sm font-semibold text-white"
                              >
                                No.
                              </th>
                              <th
                                scope="col"
                                className=" py-3.5 text-center text-sm font-semibold text-white"
                              >
                                Candidate name
                              </th>
                              <th
                                scope="col"
                                className=" py-3.5 text-center text-sm font-semibold text-white"
                              >
                                Candidate votes
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {props.candidates.map((candidate, index) => (
                              <tr key={index}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0 text-center">
                                  {candidate.index}
                                </td>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0 text-center">
                                  {candidate.name}
                                </td>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0 text-center">
                                  {candidate.voteCount}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25 poly"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connected;
