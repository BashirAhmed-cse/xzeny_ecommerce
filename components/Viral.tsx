"use client"
import { useState } from "react";
import { Card } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Viral = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const posts = [
    {
      name: "Hourigans Club House",
      timeAgo: "2d ago",
      hashtag: "#Golf",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7YQ5sY54fkWetAeG3TyY4EJQdeVhAt.png",
      videoText: "And just played a nice round",
      likes: "3.7k",
      comments: "31 Comments",
      profileImage: "/profile_image.png",
    },
    {
      name: "Edy Essien",
      timeAgo: "4d ago",
      hashtag: "#Basketball",
      image: "/basketball-court-with-player.jpg",
      videoText: "FEEL AGILE ON THE COURT",
      likes: "4.1k",
      comments: "46 Comments",
      profileImage: "/profile_image.png",
    },
    {
      name: "Sports Central",
      timeAgo: "1w ago",
      hashtag: "#Training",
      image: "/athlete-training-with-equipment.jpg",
      videoText: "Game changing performance",
      likes: "2.3k",
      comments: "18 Comments",
      profileImage: "/profile_image.png",
    },
    {
      name: "Fitness Pro",
      timeAgo: "3d ago",
      hashtag: "#Workout",
      image: "/fitness-training.jpg",
      videoText: "New personal best today!",
      likes: "5.2k",
      comments: "87 Comments",
      profileImage: "/profile_image.png",
    },
    {
      name: "Tennis World",
      timeAgo: "5d ago",
      hashtag: "#Tennis",
      image: "/tennis-match.jpg",
      videoText: "Match point victory",
      likes: "2.9k",
      comments: "24 Comments",
      profileImage: "/profile_image.png",
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
          We Are Going <span className="text-orange-500">Viral</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Join the movement and see what everyone’s talking about!
        </p>
      </div>

      <div className="relative">
        <Carousel 
          className="w-full max-w-6xl mx-auto"
          opts={{ 
            align: "start",
            loop: true,
          }}
          onMouseEnter={() => setActiveIndex(-1)}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {posts.map((post, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="overflow-hidden bg-white shadow-md rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    {/* Post Header */}
                    <div className="p-4 border-b border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <img
                            src={post.profileImage || "/placeholder.svg"}
                            alt={`${post.name} profile`}
                            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-900">{post.name}</h3>
                            <p className="text-xs text-gray-500">{post.timeAgo}</p>
                          </div>
                        </div>
                        <button className="text-gray-400 hover:text-orange-500 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-sm text-orange-500 font-medium mt-2">{post.hashtag}</p>
                    </div>

                    {/* Video/Image Content */}
                    <div className="relative aspect-video bg-gray-100 group">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={`${post.name} post`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-orange-500 rounded-full p-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                          <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8 5v10l8-5-8-5z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          {post.videoText}
                        </div>
                      </div>
                    </div>

                    {/* Engagement Stats */}
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="flex -space-x-2">
                            <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs text-white shadow-sm">👍</span>
                            <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs text-white shadow-sm">❤️</span>
                            <span className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-xs text-white shadow-sm">😮</span>
                          </div>
                          <span className="text-sm text-gray-600">{post.likes}</span>
                        </div>
                        <span className="text-sm text-gray-600">{post.comments}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="px-2 py-2">
                      <div className="flex items-center justify-between">
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 flex-1 justify-center py-2 rounded-lg hover:bg-gray-50 transition-all">
                          👍 <span className="text-sm font-medium">Like</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 flex-1 justify-center py-2 rounded-lg hover:bg-gray-50 transition-all">
                          💬 <span className="text-sm font-medium">Comment</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 flex-1 justify-center py-2 rounded-lg hover:bg-gray-50 transition-all">
                          🔗 <span className="text-sm font-medium">Share</span>
                        </button>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Floating Left/Right Controls */}
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border shadow-md hover:bg-orange-500 hover:text-white rounded-full w-10 h-10 flex items-center justify-center transition-all" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border shadow-md hover:bg-orange-500 hover:text-white rounded-full w-10 h-10 flex items-center justify-center transition-all" />
        </Carousel>
      </div>
    </section>
  );
};

export default Viral;
