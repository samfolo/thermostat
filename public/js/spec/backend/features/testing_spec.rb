RSpec.feature 'testing' do
  scenario 'feature test init' do
    visit '/'
    expect(page).to have_content 'Please choose a city'
  end
end