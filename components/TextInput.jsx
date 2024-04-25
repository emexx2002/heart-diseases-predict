import React from "react";


const TextInput = ({
  leftIcon,
  rightIcon,
  wrapperClass,
  label,
  name,
  ...restProps
}) => {

  return (
    <div className={`flex flex-col my-3 ${wrapperClass}`}>
      {label && (
        <label
          htmlFor={restProps?.id || name}
          className='text-sm mb-1 font-normal font-satoshiRegular capitalize'
        >
          {label}
        </label>
      )}

      <div className='flex  items-center gap-2'>
        {leftIcon && (
          <i className=" rounded-lg bg-white border py-3 px-3 h-[44px]">
            {leftIcon}
          </i>
        )}

        <input
          className={`w-full text-xs h-[44px] py-2.5 focus:outline-none ${leftIcon ? "pl-3" : "pl-3"
            } ${rightIcon ? "pr-3" : "pr-3"} rounded-lg bg-white border 
             `}
          // {...field}
          type="text"
          name={name}
          {...restProps}
        />


        {rightIcon && (
          <i
            className='absolute top-1/2 -translate-y-1/2 right-2.5 cursor-pointer'
          >
            {rightIcon}
          </i>
        )}
      </div>

    </div>
  );
};

export default TextInput;
