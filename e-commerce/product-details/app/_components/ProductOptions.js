function ProductOptions() {
  return (
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
                strokeWidth="2.33333"
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
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
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
        <div className="flex gap-4 flex-wrap">
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
    </div>
  );
}

export default ProductOptions;
