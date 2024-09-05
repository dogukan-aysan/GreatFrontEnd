"use client";
import { useState } from "react";

function ProductDetails() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="grid grid-cols-2 gap-8">
      {/* images */}
      <div className="h-fit flex flex-col gap-6">
        <div
          className="h-[800px] w-full rounded-lg"
          style={{
            backgroundImage:
              "url(https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="overflow-x-hidden flex gap-4">
          <div
            className="w-40 h-[190px] rounded-lg"
            style={{
              backgroundImage:
                "url(https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="w-40 h-[190px] rounded-lg"
            style={{
              backgroundImage:
                "url(https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="w-40 h-[190px] rounded-lg"
            style={{
              backgroundImage:
                "url(https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="w-40 h-[190px] rounded-lg"
            style={{
              backgroundImage:
                "url(https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
      {/* details-container */}
      <div>
        {/* details */}
        <div className="mb-10">
          <div>
            <h2 className="text-5xl font-semibold text-neutral-900 mb-5">Voyager Hoodie</h2>
            <div className="flex gap-2 items-baseline mb-2">
              <p className="text-3xl font-medium text-neutral-600">$76</p>
              <p className="text-lg font-medium text-neutral-400 line-through">$95</p>
            </div>
            <span className="px-2.5 py-[3px] border border-amber-200 rounded-full bg-amber-50 text-sm text-amber-700 ">20% OFF</span>
            <div className="mt-3 w-fit flex gap-2 items-center">
              <p className="text-xl text-neutral-900">4.1</p>
              {/* stars */}
              <div className="flex gap-1 items-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_14_713)">
                    <path
                      d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                      fill="#E5E7EB"
                    />
                    <g clip-path="url(#clip1_14_713)">
                      <path
                        d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                        fill="#FACC15"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_14_713">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_14_713">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_14_713)">
                    <path
                      d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                      fill="#E5E7EB"
                    />
                    <g clip-path="url(#clip1_14_713)">
                      <path
                        d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                        fill="#FACC15"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_14_713">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_14_713">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_14_713)">
                    <path
                      d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                      fill="#E5E7EB"
                    />
                    <g clip-path="url(#clip1_14_713)">
                      <path
                        d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                        fill="#FACC15"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_14_713">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_14_713">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_14_713)">
                    <path
                      d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                      fill="#E5E7EB"
                    />
                    <g clip-path="url(#clip1_14_713)">
                      <path
                        d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                        fill="#FACC15"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_14_713">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_14_713">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_14_729)">
                    <path
                      d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                      fill="#E5E7EB"
                    />
                    <g clip-path="url(#clip1_14_729)">
                      <path
                        d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                        fill="#FACC15"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_14_729">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_14_729">
                      <rect width="10" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="p-0.5 text-indigo-700 text-sm font-medium">See all 62 reviews</p>
            </div>
            <p className="my-8 text-base text-neutral-600">
              The Voyager Hoodie is for the explorer at heart. Its durable fabric and roomy pockets are perfect for those who are always
              searching for the next adventure.
            </p>
            {/* product options */}
            <div className="flex flex-col gap-8">
              {/* colors */}
              <div>
                <p className="mb-4 text-sm text-neutral-500">Available Colors</p>
                <div className="flex items-center gap-4">
                  <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_14_746)">
                      <path
                        d="M9 28.0001C9 17.5067 17.5066 9.00012 28 9.00012C38.4934 9.00012 47 17.5067 47 28.0001C47 38.4935 38.4934 47.0001 28 47.0001C17.5066 47.0001 9 38.4935 9 28.0001Z"
                        fill="#10B981"
                      />
                      <path
                        d="M10.1667 28.0001C10.1667 18.151 18.1509 10.1668 28 10.1668C37.8491 10.1668 45.8333 18.151 45.8333 28.0001C45.8333 37.8492 37.8491 45.8335 28 45.8335C18.1509 45.8335 10.1667 37.8492 10.1667 28.0001Z"
                        stroke="white"
                        stroke-width="2.33333"
                      />
                    </g>
                    <path
                      d="M25.6673 31.6993L36.3918 20.9749L38.0417 22.6248L25.6673 34.9991L18.2427 27.5745L19.8926 25.9246L25.6673 31.6993Z"
                      fill="white"
                    />
                    <defs>
                      <filter
                        id="filter0_d_14_746"
                        x="8"
                        y="8.00012"
                        width="40"
                        height="40"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_14_746" />
                        <feOffset />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.266667 0 0 0 0 0.298039 0 0 0 0 0.905882 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14_746" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14_746" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                  <svg width="58" height="57" viewBox="0 0 58 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 28.3334C10 17.84 18.5066 9.33337 29 9.33337C39.4934 9.33337 48 17.84 48 28.3334C48 38.8268 39.4934 47.3334 29 47.3334C18.5066 47.3334 10 38.8268 10 28.3334Z"
                      fill="#CA8A04"
                    />
                  </svg>
                </div>
              </div>
              {/* sizes */}
              <div>
                <p className="mb-4 text-sm text-neutral-500">Available Sizes</p>
                <div className="flex gap-4">
                  <button className="px-5 py-[11px] rounded bg-white border border-indigo-600">XS</button>
                  <button className="px-5 py-[11px] rounded bg-white border border-neutral-200">S</button>
                  <button className="px-5 py-[11px] rounded bg-white border border-neutral-200">M</button>
                  <button className="px-5 py-[11px] rounded bg-white border border-neutral-200">L</button>
                  <button className="px-5 py-[11px] rounded bg-white border border-neutral-200">XL</button>
                </div>
              </div>
              {/* quantity */}
              <div>
                <p className="mb-4 text-sm text-neutral-500">Quantity</p>
                <div className="w-[125px] px-0.5 py-[1px] flex gap-3 items-center bg-neutral-50 rounded-md border border-neutral-200">
                  <button className="w-5 h-5">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.8611 7.97217H4.13892V9.36106H13.8611V7.97217Z" fill="#A3A3A3" />
                    </svg>
                  </button>
                  <p className="w-[49px] px-3 py-1.5 rounded text-center text-sm font-medium text-neutral-600">1</p>
                  <button className="w-5 h-5">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.30558 7.97209V3.80542H9.69447V7.97209H13.8611V9.36098H9.69447V13.5276H8.30558V9.36098H4.13892V7.97209H8.30558Z"
                        fill="#525252"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <button className="px-6 py-4 rounded bg-indigo-700 text-lg font-medium text-white">Add to Cart</button>
            </div>
          </div>
        </div>
        {/* accordion */}
        <div className="flex flex-col gap-8">
          {/* item */}
          <div className="flex items-start gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium text-neutral-900">Features</h3>
              <ul className="pl-2 list-disc list-inside text-base text-neutral-600">
                <li>Designed for comfort and durability.</li>
                <li>Soft, breathable fabric ideal for travel and adventure.</li>
                <li>Large front pocket and adjustable hood.</li>
                <li>Minimalist design pairs well with any style.</li>
                <li>Made with eco-conscious materials.</li>
              </ul>
            </div>
            <button className="w-6 h-6 pt-0.5 ml-auto" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-neutral-400">
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 11H17V13H7V11Z"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-neutral-400">
                  <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
                </svg>
              )}
            </button>
          </div>
          {/* item */}
          <div className="flex items-start gap-6 pt-[23px] border-t border-neutral-200">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium text-neutral-900">Fabric & Care</h3>
              <ul className="pl-2 list-disc list-inside text-base text-neutral-600">
                <li>Machine wash cold on a gentle cycle.</li>
                <li>Tumble dry low or hang to dry.</li>
                <li>Do not use fabric softeners or bleach.</li>
                <li>Iron on a low setting if necessary.</li>
              </ul>
            </div>
            <button className="w-6 h-6 pt-0.5 ml-auto" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-neutral-400">
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 11H17V13H7V11Z"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-neutral-400">
                  <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
                </svg>
              )}
            </button>
          </div>
          {/* item */}
          <div className="flex items-start gap-6 pt-[23px] border-t border-neutral-200">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium text-neutral-900">Shipping</h3>
              <ul className="pl-2 list-disc list-inside text-base text-neutral-600">
                <li>Free standard shipping on all orders - no minimum spend required.</li>
                <li>Expedited shipping available at an additional cost.</li>
                <li>Packaged in biodegradable materials to reduce environmental impact.</li>
              </ul>
            </div>
            <button className="w-6 h-6 pt-0.5 ml-auto" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-neutral-400">
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 11H17V13H7V11Z"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-neutral-400">
                  <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
