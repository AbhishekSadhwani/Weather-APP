import React from 'react'

export const Loading = () => {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Search Bar Skeleton */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 flex items-center shadow-lg border border-white/20">
          <div className="w-5 h-5 bg-white/20 rounded-full ml-3 animate-pulse"></div>
          <div className="h-8 bg-white/20 rounded-lg ml-4 flex-1 animate-pulse"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Weather Card Skeleton */}
          <div className="md:col-span-2">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/20">
              <div className="space-y-8">
                <div className="flex justify-between">
                  <div className="space-y-2">
                    <div className="h-8 w-48 bg-white/20 rounded-lg animate-pulse"></div>
                    <div className="h-6 w-36 bg-white/20 rounded-lg animate-pulse"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-16 w-24 bg-white/20 rounded-lg animate-pulse"></div>
                    <div className="h-6 w-32 bg-white/20 rounded-lg animate-pulse"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-white/5 rounded-2xl p-4 flex items-center">
                      <div className="w-6 h-6 bg-white/20 rounded-full animate-pulse mr-3"></div>
                      <div>
                        <div className="h-4 w-16 bg-white/20 rounded animate-pulse mb-2"></div>
                        <div className="h-6 w-12 bg-white/20 rounded animate-pulse"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sun Position Card Skeleton */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-white/20">
            <div className="h-8 w-36 bg-white/20 rounded-lg animate-pulse mb-6"></div>
            <div className="space-y-6">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full animate-pulse mr-3"></div>
                  <div>
                    <div className="h-4 w-16 bg-white/20 rounded animate-pulse mb-2"></div>
                    <div className="h-6 w-20 bg-white/20 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hourly Forecast Skeleton */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-white/20">
          <div className="h-8 w-48 bg-white/20 rounded-lg animate-pulse mb-6"></div>
          <div className="flex space-x-8 overflow-x-auto pb-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex-none flex flex-col items-center space-y-3 bg-white/5 px-6 py-4 rounded-2xl min-w-[100px]">
                <div className="h-4 w-16 bg-white/20 rounded animate-pulse"></div>
                <div className="w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                <div className="h-6 w-12 bg-white/20 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        {/* 7-Day Forecast Skeleton */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-white/20">
          <div className="h-8 w-48 bg-white/20 rounded-lg animate-pulse mb-6"></div>
          <div className="grid gap-4">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-6 w-24 bg-white/20 rounded animate-pulse"></div>
                  <div className="w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="h-6 w-32 bg-white/20 rounded animate-pulse hidden sm:block"></div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-6 w-12 bg-white/20 rounded animate-pulse"></div>
                  <div className="h-6 w-12 bg-white/20 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
