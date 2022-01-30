local showblips	= true
local isHiddenMenu = true
local banks = {
	{name="Bank", id=108, x=150.266, y=-1040.203, z=29.374},
}

local function toggleNuiFrame(shouldShow)
  SetNuiFocus(shouldShow, shouldShow)
  SendReactMessage('setVisible', shouldShow)
	isHiddenMenu = false
end

RegisterCommand('bank', function()
  toggleNuiFrame(true)
  debugPrint('Show NUI frame')
end)

RegisterNUICallback('hideFrame', function(_, cb)
  toggleNuiFrame(false)
	isHiddenMenu = true
  debugPrint('Hide NUI frame')
  cb({})
end)

--===============================================
--==             Map Blips	                   ==
--===============================================
Citizen.CreateThread(function()
	if showblips then
		for k,v in ipairs(banks)do
		local blip = AddBlipForCoord(v.x, v.y, v.z)
		SetBlipSprite(blip, v.id)
		SetBlipScale(blip, 0.8)
		SetBlipAsShortRange(blip, true)
		if v.principal ~= nil and v.principal then
			SetBlipColour(blip, 77)
		end
		BeginTextCommandSetBlipName("STRING")
		AddTextComponentString(tostring(v.name))
		EndTextCommandSetBlipName(blip)
		end
	end
end)

function DisplayHelpText(str)
	SetTextComponentFormat("STRING")
	AddTextComponentString(str)
	DisplayHelpTextFromStringLabel(0, 0, 1, -1)
end


local isNearBank = false

Citizen.CreateThread(function()
  while true do
    Citizen.Wait(1)
    if isNearBank and isHiddenMenu then
      DisplayHelpText('Pressione ~INPUT_PICKUP~ para abrir o banco ~b~')
      if IsControlJustPressed(1, 38) then
        toggleNuiFrame(true)
      end
    end
  end

end)

Citizen.CreateThread(function()
	while true do
		Citizen.Wait(1000)
		if nearBank() then
			isNearBank = true
		else
			isNearBank = false
		end	
	end
end)

function nearBank()
	local playerloc = GetEntityCoords(PlayerPedId())
	for _, search in pairs(banks) do
		local distance = GetDistanceBetweenCoords(search.x, search.y, search.z, playerloc['x'], playerloc['y'], playerloc['z'], true)
		
		if distance <= 1 then
			return true
		end
	end
end

